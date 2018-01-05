const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const connectMongo = require('./db/connect');

const schema = require('./schema');

const start = async () => {
  const mongo = await connectMongo();
  const app = express();

  app.use('/graphql', bodyParser.json(), graphqlExpress({ context: { mongo }, schema }));
  app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

  const PORT = 8080;
  app.listen(PORT, () => {
    console.log(`[express] GraphQL server listening on port ${PORT}`);
  });
};

start();
