import express from "express"
import { newConversation } from "../Controller/Conversation-controller.js";
import { addUser,getUser } from "../Controller/User-controller.js";

const route=express.Router();
//

route.post("/add",addUser);
route.get("/users",getUser);
route.post("/conversation/add",newConversation)

export default route;