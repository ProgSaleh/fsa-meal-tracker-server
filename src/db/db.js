import { MongoClient } from "mongodb";

const DB_NAME = "my-database";

export const db = {
  // to store the current connection to MongoDB
  _dbClient: null,
  // call this function to connect to the db.. do not use arrow func.
  connect: async function (url) {
    const client = await MongoClient.connect(url, {
      // max connections to the db.
      maxPoolSize: 10,

      // for compatability resons...
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    this._dbClient = client;
  },

  getConnection: function () {
    if (!this._dbClient) {
      console.log("Please call the connect() first!");
      return process.exit(1);
    }

    // return the db from the connection to MongoClient.
    return this._dbClient.db(DB_NAME);
  },
};
