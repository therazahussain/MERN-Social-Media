import User from "../models/userModel.js";
import bcrypt from "bcrypt";


//1. Controller for the user Registerations
const registerUser = async(req, res) => {

    const { username, firstname, lastname, password} = req.body;
    
    // Hashing the password using salt and hash function.
    const salt = await bcrypt.genSalt(10)
    const hashPassword = bcrypt.hashSync(password, salt);
    
    // storing the the values inside the DB Schema.
    const newUser = new User({username, firstname, lastname, password:hashPassword}) 

    try {
        // Saving the Values in the DB.
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


// 2.Login user 
const loginUser = async(req, res) => {
    
    // getting the login credentials from the frontend 
    const {username, password} = req.body;
    try {
        // finding if any user exist with the username provided by the user
        const user = await User.findOne({username: username});

        // if the user exists thengo inside this condition
        if(user){

            // compare the password provided by the user with the one stored in the DB. 
            await bcrypt.compare(password, user.password, function(err, result) {
                // if the password is correct then send the user details 
                if (result){
                    res.status(200).json((user));
                }
                // if password is wrong entered by the user then tell him 
                else{
                    res.status(401).json({message:"Try Login with the right credentials"})
                }
            });

        }
        // If user does not exist then run this query
        else{
            res.status(404).json("User does not Exist");
        }

        
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

export {registerUser, loginUser};