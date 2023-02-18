import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const name = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const Connection = async () => {
  const Url = `mongodb://${name}:${password}@ac-koroocl-shard-00-00.qbpv0uu.mongodb.net:27017,ac-koroocl-shard-00-01.qbpv0uu.mongodb.net:27017,ac-koroocl-shard-00-02.qbpv0uu.mongodb.net:27017/?ssl=true&replicaSet=atlas-gtulmh-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(Url, { useUnifiedTopology: true });
    console.log("database connect succesfully");
  } catch (error) {
    console.log("Error geting while connect with database", error.message);
  }
};
export default Connection;
