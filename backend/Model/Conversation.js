import mongoose  from "mongoose";
const ConversationSchema=mongoose.Schema({

    members:{
        type:Array,
    },
    message:{
        type:String,
    }},
    {
        timestamps:true,// show the time of sending message
    }

)

const Conversation =mongoose.model("conversation",ConversationSchema);
export default Conversation;