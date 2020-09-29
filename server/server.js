const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server)
const cors = require('cors');
let ind=1;
let rooms={};
app.use(cors({origin: 'http://localhost:3000'}));

io.on('connection', socket => {
    //console.log("user connected");
    socket.on('greet', (data) => {
      console.log(data);
      console.log(rooms)
      console.log(socket.id)
      console.log(rooms[socket.id])
      //socket.broadcast.emit('greeti', data);
      io.to(rooms[socket.id]).emit('greeti', data);
      //io.emit('greeti', data);
    });
    socket.on('create', (data)=>{
        rooms[socket.id]=ind.toString();
        console.log(rooms);
        console.log("la")
        console.log(ind.toString())
        socket.join(ind.toString());
        socket.emit('roomid',ind.toString())
        ind++;
    });
    socket.on('join', (data)=>{
        console.log(data)
        rooms[socket.id]=data;
        console.log(rooms);
        console.log("msg")
        socket.join(data);
        socket.emit('roomid',data)
    });
    socket.on('disconnect', () => {console.log('user disconnected');});
  });


server.listen(4000, () => {
  console.log('listening on *:4000');
});