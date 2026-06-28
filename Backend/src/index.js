import express from "express"
import 'dotenv/config';
import { ConnectDB } from "./lib/db.js";
import dns from "dns";
import User from "./models/User.model.js";
import { clerkMiddleware } from '@clerk/express'
import cors from "cors";

// change the dns server to google dns server
dns.setServers(['8.8.8.8', '1.1.1.1']);
const app = express();
const PORT= process.env.PORT;
const FRONTEND_URL = process.env.FRONTEND_URL

// middlewares
app.use(express.json());
// cors middleware to allow cross origin requests 
app.use(cors({origin: FRONTEND_URL, credentials: true}));


// clerk middleware to verify the user is authenticated
app.use(clerkMiddleware())
 

// check status of the server
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Server is healthy"
    })
});
// app Initializaton and connection to the database
app.listen(PORT,()=>{
    ConnectDB();   
    console.log("the app is running at port:",PORT )
});