import mongoose  from "mongoose";
const MessageSchema=mongoose.Schema({

    conversationId:{
        type:String,
    },
    receverId:{
        type:String,
    },
    senderId:{
        type:String,
    },
    text:{
        type:String,
    },
    type:{
        type:String,
    }
},
{
    timestamps:true,// show the time of sending message
}

)
const Message =mongoose.model("message",MessageSchema);
export default Message;