import Conversation from "../Model/Conversation.js";
import Message from "../Model/Message.js";

export const newMessage=async(req,res)=>{
    try{
        const newmessage= new Message(req.body);
        await newmessage.save();// save the new message 
        await Conversation.findOneAndUpdate(req.body.conversationId,{message:req.body.text})// save the latest message 
        return res.status(200).json("message sent sucessfully")

    }catch(err){
        return res.status(500).json(err.message)

    }
}

export const getMssage=async(req,res)=>{
    try{
        const message=await Message.find({conversationId:req.params.id});
        return res.status(200).json(message)
    }catch(err){
        return res.status(500).json(err.message)

    }

}