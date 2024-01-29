// require('dotenv').config({path: './env'})

import dotenv from "dotenv"

import connectDB from "./db/index.js";

dotenv.config({
    path:'.//env'
})

connectDB();


/*
( async() =>{
    try{
         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
         app.on("error", (error) =>{
            console.log("ERROR: ",error);
            throw error;
         })

         app.listen(process.debugPort, () =>{
            console.log(`Server is running on port,{process.env.PORT}`);
         })
    }catch(err){
       console.log("ERROR: ",error)
       throw err
    }
})()

*/

