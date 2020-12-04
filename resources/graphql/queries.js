const GET_USERS = `
  query{
    users{
      names
      password
      username
    }
  }
`;

const IS_EXIST_USER = `
  query($username: String!, $password: String!){
    users(where: { 
      username: {
        _eq: $username
      }
      password: {
        _eq: $password
      }
    }){
      id
    }
  }
`

module.exports = {
  GET_USERS,
  IS_EXIST_USER
}
