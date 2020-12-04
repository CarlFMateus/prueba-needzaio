const fetch = require('node-fetch');

function executeServiceGraphql(query, variables) {
  const send = { query, variables: variables || null }
  const headers = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET
    },
    body: JSON.stringify(send)
  }

  return fetch(`${process.env.SERVER_API_HASURA}`, headers);
}

module.exports = executeServiceGraphql;
