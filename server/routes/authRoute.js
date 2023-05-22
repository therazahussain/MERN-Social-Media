import express from "express";
import {registerUser, loginUser} from "../controller/authController.js"
const router = express.Router();

// Route for the Registertion of the User
router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;