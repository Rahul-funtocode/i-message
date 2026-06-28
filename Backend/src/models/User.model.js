import mongoose from "mongoose";

// Schema Creation with fields required 
const UserSchema = new mongoose.Schema({
    clerkid: {
        type: String,
        required: true,
        unique: true,
    },


    Email: {
        type: String,
        required: true,
        unique: true,
    },
    FullName: {
        type: String,
        required: true,

    },
    ProfilePic: {
        type: String,
        default: ""
    },


    // created At or Updated At 
}, { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;