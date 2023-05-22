import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser  from "body-parser";
import Connection from "./dataBase/dabase.js"
import AuthRoute from "./routes/authRoute.js"
import UserRoute from "./routes/userRoute.js"
import PostRoute from "./routes/postRoute.js"

// Port 
const port = process.env.PORT;
const app = express();

// To get the values from the frontend (Middleware)
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}))

// DataBase Connection
Connection();

// ROUTES
// 1.Routes for the authentiation of the user
app.use("/auth",AuthRoute)

// 2.Route for the all user functionality
app.use("/user",UserRoute)

// 3.Route for the Posts.
app.use("/post",PostRoute)

app.listen(port,()=>{
    console.log('listening on port ' + port)
})