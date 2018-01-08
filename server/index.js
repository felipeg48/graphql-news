const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { MongoClient } = require('mongodb');
const schema = require('./schema');
const auth = require('./lib/auth');

const start = async () => {
  const app = express();
  const MONGO_URL = 'mongodb://localhost:27017';

  await MongoClient.connect(MONGO_URL, { promiseLibrary: Promise })
    .catch(err => console.error(err.stack)) // eslint-disable-line no-console
    .then(client => {
      const res = client.db('graphqlnews');
      const db = {
        Links: res.collection('links'),
        Users: res.collection('users'),
      };
      const buildOptions = async (req, res) => { // eslint-disable-line
        const user = auth(req, db.Users);
        return {
          context: { db, user },
          schema,
        };
      };

      app.use('/graphql', bodyParser.json(), graphqlExpress(buildOptions));
      app.use(
        '/graphiql',
        graphiqlExpress({
          endpointURL: '/graphql',
          passHeader: `'Authorization': 'bearer token-example@example.com'`,
        })
      );

      const PORT = 8080;
      app.listen(PORT, () => {
        console.log(`[express] GraphQL server listening on port ${PORT}`); // eslint-disable-line no-console
      });
    });
};

start();
