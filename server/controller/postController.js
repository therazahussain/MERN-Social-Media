import Post from "../models/postModel.js"
import User from "../models/userModel.js"
import mongoose from "mongoose";


// 1.Controller for creating a new post;
const createPost = async (req, res) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.status(200).json("New Post Created !");
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


// 2. Controller for fetching the post.
const getPost = async (req, res) => {
    const id = req.params.id;

    try {
        const userPost = await Post.findById(id);
        res.status(200).json(userPost);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


// 3. Controller for updating the post.
const updatePost = async (req, res) => {

    // id of the post which we want to update
    const id = req.params.id;

    // Id of the user who is trying to update the post
    const { userId } = req.body;

    try {
        const post = await Post.findById(id);

        // Check if the user who wants to update the post id the author of the post
        if (post.userId === userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json("Post Updated")
        }
        else {
            res.status(403).json("Action Forbidden");
        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


// 4. Controller for deleting a Post
const deletePost = async (req, res) => {

    // id of the post which we want to delete
    const id = req.params.id;

    // id of the user who wants to delete the post
    const { userId } = req.body;

    try {
        const post = await Post.findById(id);

        // check if the user who wants to delete the post is the one who owens the post
        if (post.userId === userId) {
            await post.deleteOne()
            res.status(200).json("Post Deleted")
        }
        else {
            res.status(403).json("Action Forbidden");
        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


// 5. Controller for like and dislike of post.
const likePost = async (req, res) => {

    // id of the post which we want to like or dislike
    const id = req.params.id;

    // id of the user who want to like this post
    const { userId } = req.body;

    try {
        const post = await Post.findById(id);

        // Checking if the user liked the post already or not if not then like it.
        if (!post.likes.includes(userId)) {
            await post.updateOne({ $push: { likes: userId } });
            res.status(200).json("Post Liked")
        }
        // if user already liked this post then dislike it
        else {
            await post.updateOne({ $pull: { likes: userId } });
            res.status(200).json("Post Disliked")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// 6. Controller for getting the timeline post.
const getTimelinePost = async (req, res) => {
    const userId = req.params.id;

    try {
        // fetch the posts of the user who is logged in.
        const currentUserPosts = await Post.find({ userId: userId });
        // Post of the users who we follow.
        const followingPosts = await User.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(userId),
                },
            },
            {
                $lookup: {
                    from: "posts",
                    localField: "followings",
                    foreignField: "userId",
                    as: "followingPosts",
                },
            },
            {
                $project: {
                    followingPosts: 1,
                    _id: 0,
                },
            },
        ]);

        // Concatinating the follow post with our post and fetchin them all in same schema
        res.status(200).json(currentUserPosts.concat(followingPosts[0].followingPosts)
        // sorting the posts based on the timeline of making them.
            .sort((a, b) => {
                return b.createdAt - a.createdAt;
            })
        );

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export { createPost, getPost, updatePost, deletePost, likePost, getTimelinePost };