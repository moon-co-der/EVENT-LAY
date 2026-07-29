import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

const db= process.env.MONGO_URI


const connectDB = async ()=> {
    try{
        await mongoose.connect(db);
        console.log("db is connected")
    }
    catch(error){
        console.log("DB is not connected");
        console.log(error.message);
    }
}

export default connectDB;