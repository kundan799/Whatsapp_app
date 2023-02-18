import express from "express";
import Connection from "./Database/db.js";

const app = express();

const PORT = 8500;

Connection();


app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
