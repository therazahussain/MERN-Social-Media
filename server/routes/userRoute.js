import express from 'express';
import {getUser, updateUser, deleteUser, followUser, unfollowUser} from "../controller/userController.js"

const router = express.Router();

// To frtch the user from the DB
router.get('/:id', getUser);

// To Updatethe User in the DB
router.put('/:id', updateUser);

// to delete the user from the DB
router.delete('/:id', deleteUser);

// to follow the user 
router.put('/:id/follow', followUser)

// to unfollow the user 
router.put('/:id/unfollow', unfollowUser)

export default router;