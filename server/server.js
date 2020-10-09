const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server)
const cors = require('cors');
let ind=1;
let rooms={};
let time={};
let intervals={}
app.use(cors({origin: 'http://localhost:3000'}));

io.on('connection', socket => {
    console.log(`${ socket.id } connected`);
    socket.on('moved', (data) => {
        console.log(data)
        io.to(rooms[socket.id]).emit('move',data)
    });
    
    socket.on('join', (data)=>{
        console.log(data)
        console.log(time);
        rooms[socket.id]=data;
        if(time[rooms[socket.id]]===undefined)
        {
            time[rooms[socket.id]]=20*60;
        }
        console.log(rooms);
        console.log("msg")
        socket.join(data);
        socket.emit('roomid',data)
    });

    socket.on('start_timer',(data)=>{
        
        intervals[rooms[socket.id]]=setInterval(()=>{
            io.to(rooms[socket.id]).emit('time_left',--time[rooms[socket.id]])
            console.log(rooms[socket.id])
            console.log(time);
            console.log(time[rooms[socket.id]])
            
        },1000);
    });
    socket.on('stop_timer',(data)=>{
        clearInterval(intervals[rooms[socket.id]]);
    })


    socket.on('disconnect', () => {
        
        console.log(`${ socket.id } disconnected`);
    });
 




/*
    socket.on('create', (data)=>{
        rooms[socket.id]=ind.toString();
        console.log(rooms);
        console.log("la")
        console.log(ind.toString())
        socket.join(ind.toString());
        socket.emit('roomid',ind.toString())
        ind++;
    });*/
});


server.listen(4000, () => {
  console.log('listening on *:4000');
});