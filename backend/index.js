import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./Database/db.js";
import Route from "./routes/route.js";


const app = express();

//route
app.use(cors())
app.use(bodyParser.json({extended:true}))
// parse the url that you have enter and give gap b/w them like - www.google.com?q=masai school
app.use(bodyParser.urlencoded({extended:true}))
app.use("/",Route)

// port
const PORT = 8500;

//db connection
Connection();


// listen
app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
