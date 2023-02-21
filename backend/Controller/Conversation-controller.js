import Conversation from "../Model/Conversation.js"

export const newConversation=async(req,res)=>{
    try{

        const exist = await Conversation.findOne({ members:{$all :[req.body.senderId,req.body.receverId]}})
        if(exist){
            return res.status(200).json("user conversation already exist")
        }

        const NewConversation=new Conversation({
            members:[req.body.senderId,req.body.receverId]
        })
        await NewConversation.save();
        return res.status(200).json("user conversation save")

    }catch(err){
        return res.status(500).json("error while getting at covesation api")

    }
}

export const getConversation=async(req,res)=>{
    try{
        // check if senderid and receverid persent then give then object of particular one 
        let conversation =await Conversation.findOne({members:{$all :[req.body.senderId,req.body.receverId]}})
        return res.status(200).json(conversation)

    }catch(err){
        return res.status(500).json(err.message)

    }

}