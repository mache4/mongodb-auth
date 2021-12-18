import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    email: String,
    name: String,
    password: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const User = mongoose.model("users", postSchema);

export default User;