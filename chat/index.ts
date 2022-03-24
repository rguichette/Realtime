import { Server } from "socket.io";
const app = require("express")();
var cors = require('cors')







app.use(cors())

const httpServer = require("http").createServer(app);

// const io = require("socket.io")(httpServer, {cors: {origin: "*"}});


const io = new Server(httpServer, {cors: {origin: "*"}});

console.log("hello chat server!")


// });






io.on("connection", async (socket:any) => {
  // ...
  console.log("connected!")
    socket.on("hello", ()=>{
        console.log("yo!");
        
    })

   console.log(io.engine.clientsCount);
   

//     socket.on("mobile", ()=>{
//         console.log("logging from mobile")
//     })

console.log(socket.id);



});

httpServer.listen(3030);

// console.log("hello world!")