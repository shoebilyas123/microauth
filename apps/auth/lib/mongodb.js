const { MongoClient } = require('mongodb');

const MONGO_URI = 'mongodb://root:root@localhost:27017/';
const mongo_client = new MongoClient(MONGO_URI);

exports.getCollection = async function (dbName, collectionName) {
  const database = mongo_client.db(dbName);
  const collection = database.collection(collectionName);

  return collection;
};

module.exports = mongo_client;
