import mongoose from 'mongoose';

// Schema for the For the users.
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        profilePicture: String,
        coverPicture: String,
        about: String,
        livesIn: String,
        worksAt: String,
        relationShip: String,
        followers: [],
        followings: [],
    },
    {timestamps:true}
);

const User = mongoose.model('User', userSchema);


export default User;