import dotenv from "dotenv";
dotenv.config();
import mongoose from 'mongoose';


const Connection = async() => {
    //database url
    const URL = process.env.MONGO_DB;
    try {
        await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Database Connected")
    } catch (error) {
        console.log("Error while connecting with DataBase",error);   
    }
}

export default Connection