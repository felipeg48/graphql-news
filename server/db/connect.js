const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017';

module.exports = async () => {
  await MongoClient.connect(MONGO_URL, (err, client) => {
    if (err) throw err;

    const db = client.db('graphqlnews');

    return {
      Links: db.collection('links'),
      Users: db.collection('users'),
    };
  });
};
