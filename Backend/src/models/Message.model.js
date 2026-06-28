import mongoose from "mongoose";
// Schema And Field Creation

const MessageSchema = new mongoose.Schema({
    SenderId: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        required: true,
    },
    RecieverId: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        required: true,
    },
    Text: {
        type: String,
    },
    Image: {
        type: String,
    },
    Video: {
        type: String,
    },


}, { timestamps: true }

);

const Message = mongoose.model("Message", MessageSchema);
export default Message;