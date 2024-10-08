
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async() =>{
    try {
        const connnectionInstance = await mongoose.connect(`&{process.env.MONGODB_URI}/&{DB_NAME}`)
        console.log(`\n MongoDb  connected !! DB Host : ${connnectionInstance.connection.host} `);
        //console.log(connnectionInstance);
        
        
        
    } catch (error) {
        console.log("mongo db connection failed ", error);
        process.exit(1)
    }
}

export default connectDB