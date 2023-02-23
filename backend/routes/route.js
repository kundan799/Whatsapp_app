import express from "express"
import { newConversation,getConversation } from "../Controller/Conversation-controller.js";
import { fileuplode, getImage } from "../Controller/image-controler.js";
import { getMssage, newMessage } from "../Controller/message-controller.js";
import { addUser,getUser } from "../Controller/User-controller.js";
import uplode from "../utils/Uplode.js";

const route=express.Router();
//

route.post("/add",addUser);
route.get("/users",getUser);

route.post("/conversation/add",newConversation);
route.post("/conversation/get",getConversation);

route.post("/message/add",newMessage);
route.get("/message/get/:id",getMssage);

route.post("/file/uplode",uplode.single('file'),fileuplode);
route.get("/file/:filename",getImage)


export default route;