import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import http from "http";
import {config} from "dotenv";
import {authRoutes} from "./routes/authRoutes";


config();

//custom files


const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors());

//register the routes
app.use('/api/auth',authRoutes)



const server = http.createServer(app);


mongoose.connect(process.env.MONGO_URI).then(() => {
    server.listen(PORT, () => {
        console.log(`server is listening ${PORT}`);
    });
}).catch(err => {
    console.log(err)
})