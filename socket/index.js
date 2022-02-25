const io = require("socket.io")(8900,{
    cors :{
        origin : "http://localhost:3000",
    }
})
let users = [];

const addUser = (userId,socketId)=>{
    !users.some(user => user.userId === userId) &&
     users.push({userId,socketId})
} 
const removeUser = (socketId)=>{
    users = users.filter( user => user.socketId !== socketId)
}

io.on("connection",(socket)=>{
    //when Connect
    console.log("user connected...")

    //take userId and socket Id from user
    socket.on("addUser", userId=>{
        addUser(userId,socket.id);
        io.emit("getUsers",users);
    })
    
    //Send and Get Message

    //When DisConnect
    socket.on("disconnect",()=>{
        console.log("a user disconnected");
        removeUser(socket.id);
        io.emit("getUsers",users);
    })

}) 