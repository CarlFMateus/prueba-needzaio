const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');

const usersQuery = require('../resources/graphql/queries');
const executeService = require('../utils/executeService');

const PORT = process.env.PORT || 3030

const typeDefs = gql`
  type User {
    username: String
    password: String
    names: String
  }

  type Query {
    users: [User]
  }

  type Mutation {
    login ( args: LoginInput!): LoginOutput
  }

  input LoginInput {
    username: String!
    password: String!
  }

  type LoginOutput {
    result: Boolean
  }
`;

const resolvers = {
  Query: {
    users: async (parent, args, context) => {
      try {
        const response = await executeService(usersQuery.GET_USERS);
        const { data } = await response.json();
        return data.users
      } catch (error) {
        console.log(error)
        return []
      }
    }
  },

  Mutation: {
    login: async (parent, {args}, context) => {
      try {
        console.log(args)
        const response = await executeService(usersQuery.IS_EXIST_USER, args);
        const { data } = await response.json()
        console.log(data)
        return { result: data.users.length > 0 }
      } catch (error) {
        console.log(error)
        return { result: false }
      }
    }
  }
}

const context = ({ req }) => {
  return { headers: req.headers };
};

const schema = new ApolloServer({ typeDefs, resolvers, context });
schema.listen({ port: PORT }).then(data => {
  console.log(`schema ready at ${data.url}`);
});
