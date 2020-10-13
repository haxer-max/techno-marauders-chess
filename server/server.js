const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server)
const cors = require('cors');

let ind=1;
let socketIds={};
let rooms={}
let time={};
let intervals={}
app.use(cors({origin: 'http://localhost:3000'}));

io.on('connection', socket => {
    console.log(`${ socket.id } connected`);
    socket.on('moved', (data) => {
        console.log(data)
        io.to(socketIds[socket.id]).emit('move',data)
    });
    
    socket.on('join', (data)=>{
        
        if(rooms[data]===undefined || rooms[data].limit<2){
            console.log(rooms[data])
            if(rooms[data]=== undefined){
                rooms[data]={};
                rooms[data].white=socket.id;
                rooms[data].limit=1;
                socket.emit('roomid',{roomid:data,isWhite:1})
                console.log("yay");
            }else{
                if(rooms[data].white===undefined){
                    rooms[data].white=socket.id;
                    rooms[data].limit+=1;
                    socket.emit('roomid',{roomid:data,isWhite:1})
                    console.log("y0");
                }else{
                    rooms[data].black=socket.id;
                    rooms[data].limit+=1;
                    socket.emit('roomid',{roomid:data,isWhite:0})
                    console.log("hmm")
                }
            }
            socketIds[socket.id]=data;
            if(time[socketIds[socket.id]]===undefined)
            {
                time[socketIds[socket.id]]=20*60;
            }
            socket.join(data);
            
            console.log(rooms);
            console.log(socketIds);
        }
    });

    socket.on('start_timer',(data)=>{
        
        intervals[socketIds[socket.id]]=setInterval(()=>{
            io.to(socketIds[socket.id]).emit('time_left',--time[socketIds[socket.id]])
            console.log(socketIds[socket.id])
            console.log(time);
            console.log(time[socketIds[socket.id]])
            
        },1000);
    });
    socket.on('stop_timer',(data)=>{
        clearInterval(intervals[socketIds[socket.id]]);
    })


    socket.on('disconnect', () => {
        
        console.log(`${ socket.id } disconnected`);
    });
 




/*
    socket.on('create', (data)=>{
        socketIds[socket.id]=ind.toString();
        console.log(socketIds);
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