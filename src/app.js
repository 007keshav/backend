import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express()

//app.use()-> it is used for middleware & during configrations
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

//setting for types of data that are comming 
//json file having limit of 16kb
app.use(express.json({
    limit:"16kb"
}))

//configuring data if data is comming from url
app.use(express.urlencoded({extended:true,limit:"16kb"}))
 
//to store files and folder in our server, use express.static in public folder
app.use(express.static("public"))

app.use(cookieParser())

//routes

import userRouter from "./routes/user.routes.js"

//routes decalration
app.use("/api/v1/users", userRouter)






export {app}