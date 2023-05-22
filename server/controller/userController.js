import User from "../models/userModel.js";
import bcrypt from "bcrypt";

// 1. Controller for fetching the user details using the id
const getUser = async (req, res) => {

    // fetching the id from the url
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        if (user) {
            // Destructing the Password and all the other details which are not private
            const { password, ...otherDetails } = user._docs;
            // Send the user details
            res.status(200).json(otherDetails);
        } else {
            res.status(404).json({ message: "User does not exist" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}


// 2. Controller for updating the user details using the id
const updateUser = async (req, res) => {
    const id = req.params.id;

    // Getting all the details provded by the user.
    const { currentUserId, currentUserAdminStatus, password } = req.body;

    try {
        if (id === currentUserId || currentUserAdminStatus) {

            // if the user also intend to update the password only then this will run.
            if (password) {
                // Hashing the password using salt and hash function.
                const salt = await bcrypt.genSalt(10)
                req.body.password = bcrypt.hashSync(password, salt);
            }

            // Getting the Updated Values
            const user = await User.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).json(user)

        }
        else {
            res.status(403).json("Access Denied! you can only change your own profile")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// 3. Controller for Deleting the User.
const deleteUser = async (req, res) => {

    const id = req.params.id;
    // Destructing the id and the status of the user from Body.
    const { currentUserId, currentAdminStatus } = req.body;

    try {
        // if id in the url and the user id are same or User is the Admin then delete.
        if (id === currentUserId || currentAdminStatus) {
            await User.findByIdAndDelete(id)
            res.status(200).json("Successfully deleted the user")
        }
        else {
            res.status(403).json("Access Denied! you can only change your own profile");
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// 4. Controller for Following a user
const followUser = async (req, res) => {
    const id = req.params.id;

    // user who wants to follow
    const { currentUserId } = req.body;

    try {

        // if the user wants to follow himself
        if (currentUserId === id) {
            res.status(403).json({ message: "Action forbidden" });
        }
        else {
            // User Who wants to follow
            const followingUser = await User.findById(currentUserId);

            // User who is going to be followed
            const followUser = await User.findById(id);

            // Check if the userId that we want to follow already exists in our follow list database or not
            if (!followUser.followers.includes(currentUserId)) {

                // Push the id of the us in the follow list of user we just followed
                await followUser.updateOne({ $push: { followers: currentUserId } })

                // Push the id of the user we just followed in the followings section
                await followingUser.updateOne({ $push: { followings: id } })
                res.status(200).json("User Followed!")
            }
            else {
                res.status(403).json("User is already followed by You")
            }

        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}


// 4. Controller for Unfollowing a user
const unfollowUser = async (req, res) => {
    const id = req.params.id;

    // user who wants to follow
    const { currentUserId } = req.body;

    try {

        // if the user wants to follow himself
        if (currentUserId === id) {
            res.status(403).json({ message: "Action forbidden" });
        }
        else {
            // User Who wants to follow
            const followingUser = await User.findById(currentUserId);

            // User who is going to be followed
            const followUser = await User.findById(id);

            // Check if the userId that we want to follow already exists in our follow list database or not
            if (followUser.followers.includes(currentUserId)) {

                // Push the id of the us in the follow list of user we just followed
                await followUser.updateOne({ $pull: { followers: currentUserId } })

                // Push the id of the user we just followed in the followings section
                await followingUser.updateOne({ $pull: { followings: id } })
                res.status(200).json("User Unfollowed!")
            }
            else {
                res.status(403).json("User is not followed by You")
            }

        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}


export { getUser, updateUser, deleteUser, followUser, unfollowUser } 