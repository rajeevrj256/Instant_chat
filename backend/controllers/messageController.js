import { conversation } from "../models/conversationModel.js";
import { Message } from "../models/messageModel.js";
export const sendMessage=async(req,res)=>{
    try {
        const senderId=req.id;
        const receiverId= req.params.id;
        const {message}=req.body;

        let gotConversation=await conversation.findOne({
            participants:{$all:[senderId,receiverId]},
        });

        if(!gotConversation){
            gotConversation=await Conversation.create({
                participants:[senderId,receiverId],
            })
        };
        const newMessage=await Message.create({
            senderId,
            receiverId,
            message
        });
        if(newMessage){
            gotConversation.message.push(newMessage._id);
        };
        await gotConversation.save();

        //socket IO

        
    } catch (error) {
        console.log(error);
    }
}