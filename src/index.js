import express from 'express';
import connectDB from './db/index.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({
  path: './env'
});

// Initialize Express app
const app = express();

// Middleware (if needed)
app.use(express.json()); // Example middleware for JSON requests

// Connect to the database
connectDB()
  .then(() => {
    // Start the server after successful DB connection
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log('MONGODB connection failed !!! ', err);
  });














//code by hitesh chaudhary
// import connectDB from "./db/index.js";

// import dotenv from 'dotenv'

// dotenv.config({
//     path:'./.env'
// })


// connectDB()
// .then(() => {
//     app.listen(process.env.PORT || 8000, () =>{
//         console.log( `server is running at port : ${process.env.PORT}`);
//     })
// }).catch((err) => {
//     console.log("MONGODB connection  failed !!! ", err);
    
// });











// /*

// 1st approch to connnect the mongodb
// import express from "express";
// const app =express()




// (async () => {
//     try {
//         await mongoose.connect(`&{process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error) =>{
//             console.log("eorrr: ",error);
//             throw error
//         })

//         app.listen(process.env.PORT, () =>{
//             console.log`app is listening on port {process.env.PORT}`
//         })
//     } catch (error) {
//         console.error("error: ",error)
//         throw err
//     }
// })*/