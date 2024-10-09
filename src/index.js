import connectDB from "./db/index.js";
import dotenv from 'dotenv'

dotenv.config({
    path:'./.env'
})


connectDB




/*

1st approch to connnect the mongodb
import express from "express";
const app =express()




(async () => {
    try {
        await mongoose.connect(`&{process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error) =>{
            console.log("eorrr: ",error);
            throw error
        })

        app.listen(process.env.PORT, () =>{
            console.log`app is listening on port {process.env.PORT}`
        })
    } catch (error) {
        console.error("error: ",error)
        throw err
    }
})*/