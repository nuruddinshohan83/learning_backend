import mongoose from "mongoose"
const postSchema = new mongoose.Schema({
    title: String,
    createdAt: Date,
})
const Post = mongoose.model("Post", postSchema)
export default Post
