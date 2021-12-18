import Post from "../models/post.js";

export const getPosts = async (req, res) => {
    try {
        const postMessages = await Post.find();
        res.status(200).json(postMessages);
    } catch (err) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;
    const newPost = new Post({ title, message });

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}