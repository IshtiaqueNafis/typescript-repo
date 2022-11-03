import { createServer } from "http";
import { Server } from "socket.io";


const socketServer = createServer();
const io = new Server(socketServer, {
    cors:{
        origin:"*",
        methods:['GET','POST']
    }
});
io.on("connection",(socket) => {
    console.log("users connected")
    console.log(socket.id);
})


export {
    socketServer,
    io as registerSocketServer
};