import express from 'express';
import {createPost, getPost, updatePost, deletePost, likePost, getTimelinePost} from "../controller/postController.js"

const router = express.Router();

// 1.Router to Create the post
router.post('/', createPost);

// 2.Router to fetch the post 
router.get('/:id', getPost);

// 3.Router to Update the post 
router.put('/:id', updatePost);

// 4.Router to Delete the post 
router.delete('/:id', deletePost);

// 5.Router to Like or dislike the post of the user
router.put('/:id/like', likePost);

// 6. Router to fetch all the timeLine post of the user and the users he/she is following.
router.get('/:id/timeLine', getTimelinePost);

export default router;