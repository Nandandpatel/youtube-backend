import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB=async () =>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}${DB_NAME}`)
        console.log(`\n MongoDB database  Connected:",${connectionInstance.connection.host}`);
   }catch(err){
      console.log("ERROR: ",err)
      throw err
   }
}

export default connectDB;