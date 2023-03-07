import { Server } from "socket.io";

// to solve  cors error 
const io=new Server(9000,{
    cors: {
        origin :"http://localhost:3000"   
    }
})
// save active user
let users=[]

const adduser=(userData,socketId)=>{
    !users.some(user=>user.sub==userData.sub) && users.push({...userData,socketId})

}

//

const getuser=(userID)=>{
    return users.find(user=>user.sub===userID);

}
io.on("connection",(Socket)=>{
    console.log("user connection");
    Socket.on("addUser",userData=>{
        adduser(userData,Socket.id);
        io.emit("getuser",users)// send data to fronted user online data useing emit
    })

    Socket.on("sendMessage",data=>{
        const user=getuser(data.receverId);
        io.to(user.socketId).emit("getMessage",data)// 
    })
})