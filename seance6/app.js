const express = require("express");
const http = require("http");
var path = require("path");
const chatRouter=require("./routes/chat.js")

var app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");
app.use('/chat',chatRouter);

const server = http.createServer(app);
const io = require("socket.io")(server);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
      io.emit("msg",'user has been disconnected')
    });
socket.emit("msg","a new user is connected");
socket.on("msg",(data)=>{
    io.emit("msg",data);
});
  });
    
server. listen(3000, () => console.log("server is run"));

