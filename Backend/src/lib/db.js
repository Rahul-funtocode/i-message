import mongoose from "mongoose";
import "dotenv/config"
// write asyncronous function to connet to the database

export async function ConnectDB() {
    try {
        const mongouri = process.env.MONGO_URI;

        // check whether mongo db connection uri is present or not
        if(!mongouri){
            throw new Error("Mongo URI Required")
        }
        const conn = await mongoose.connect(mongouri);
        console.log("Mongo Connected Successfully:",conn.connection.host)
        
    } catch (error) {
        console.error("Mongo Connection Error",error.message);
        // process has to be terminated by using flag 1 means failed 0 means success
        process.exit(1); 
    }
    
}