const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server)
const cors = require('cors');

app.use(cors({origin: 'http://localhost:3000'}));

io.on('connection', socket => {
    //console.log("user connected");
    socket.on('greet', (data) => {
      console.log(data);
      //socket.broadcast.emit('greeti', data);
      io.emit('greeti', data);
    });

    //socket.on('disconnect', () => {console.log('user disconnected');});
  });


server.listen(4000, () => {
  console.log('listening on *:4000');
});