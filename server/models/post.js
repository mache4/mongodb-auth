import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    author: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Post = mongoose.model("posts", postSchema);

export default Post;