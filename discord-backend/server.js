import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import http from "http";
import {config} from "dotenv";
import {authRoutes} from "./routes/authRoutes";
import {registerSocketServer} from "./socket/socketIoServer";


config();

//custom files


const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

//register the routes
app.use('/api/auth', authRoutes)

// test route to verify if our middleware is working


const server = http.createServer(app);
registerSocketServer.listen(server)


mongoose.connect(process.env.MONGO_URI).then(() => {
    server.listen(PORT, () => {
        console.log(`server is listening ${PORT}`);
    });
}).catch(err => {
    console.log(err)
})