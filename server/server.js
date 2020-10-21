const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const cors = require("cors");
//const { Socket } = require("socket.io-client");

const maxTime=20*60;
const initboard = {
    BoardState: [
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
    ],
    walls: [
        [2, 3, 1, 4, 0, 4, 3, 3, 0, 1, 0, 3, 4, 0, 3],
        [0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 4, 0, 3, 0, 0],
        [4, 3, 0, 3, 0, 4, 0, 0, 4, 0, 0, 0, 4, 0, 0],
        [0, 4, 0, 0, 4, 4, 0, 3, 3, 0, 3, 0, 0, 3, 2],
        [0, 0, 0, 3, 2, 3, 0, 0, 4, 3, 0, 3, 2, 0, 0],
        [3, 3, 4, 0, 3, 4, 3, 3, 0, 0, 4, 0, 0, 0, 0],
        [4, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 3, 4, 3, 0],
        [0, 4, 3, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 4, 0],
        [3, 0, 0, 4, 3, 4, 0, 3, 3, 0, 0, 4, 0, 3, 0],
        [0, 4, 0, 1, 0, 3, 0, 0, 4, 0, 4, 0, 3, 0, 4],
    ],
    turn:1
};
const rooom={
    white:"id",
    black:"id",
    turn:0,
    limit:1,
    board:"initboard",
    ready:0
}
const socketIds = {};
const rooms = {};
const time = {};
const intervals = {};
const timeintervals={};
app.use(cors({ origin: "http://localhost:3000" }));

const copyboard=()=>{
    const newboard={};
    newboard.BoardState= initboard.BoardState.map(function (arr) {
        return arr.slice();
    });
    newboard.walls= initboard.walls.map(function (arr) {
        return arr.slice();
    });
    newboard.turn=-1;
    return newboard;
}
io.on("connection", (socket) => {
    console.log(`${socket.id} connected`);

    socket.on("moved", (data) => {
        rooms[socketIds[socket.id]].board.BoardState =data;
        rooms[socketIds[socket.id]].board.turn= rooms[socketIds[socket.id]].board.turn?0:1;
        //console.log(rooms[socketIds[socket.id]])
        io.to(socketIds[socket.id]).emit("move", rooms[socketIds[socket.id]].board);
        if(rooms[socketIds[socket.id]].white===socket.id){
            console.log("he is racist");
        }
    });

    socket.on("rotated", ({board,wall}) => {
        rooms[socketIds[socket.id]].board.BoardState =board;
        rooms[socketIds[socket.id]].board.walls =wall;
        rooms[socketIds[socket.id]].board.turn= rooms[socketIds[socket.id]].board.turn?0:1;
        io.to(socketIds[socket.id]).emit("move", rooms[socketIds[socket.id]].board);
        if(rooms[socketIds[socket.id]].white===socket.id){
            console.log("he is racist");
        }
    });

    socket.on("join", (data) => {
        if (rooms[data] === undefined || rooms[data].limit < 2) {
            if (rooms[data] === undefined) {
                rooms[data] = {};
                rooms[data].white = socket.id;
                rooms[data].limit = 1;
                rooms[data].board = copyboard();
                console.log(rooms[data]);
                timeintervals[data]={}
                timeintervals[data].white=maxTime;
                timeintervals[data].black=maxTime;
                socket.emit("roomid", { roomid: data, isWhite: 1, board: rooms[data].board, timeinterval:timeintervals[data] });
                console.log("yay");
            } else {
                if (rooms[data].white === undefined) {
                    rooms[data].white = socket.id;
                    rooms[data].limit += 1;
                    if(rooms[data].whiteTime===undefined) rooms[data].whiteTime= maxTime
                    socket.emit("roomid", { roomid: data, isWhite: 1, board:rooms[data].board, timeinterval:timeintervals[data] });
                    console.log("y0");
                } else {
                    rooms[data].black = socket.id;
                    rooms[data].limit += 1;
                    socket.emit("roomid", { roomid: data, isWhite: 0, board:rooms[data].board, timeinterval:timeintervals[data] });
                    console.log("hmm");
                }
            }
            socketIds[socket.id] = data;
            if (time[socketIds[socket.id]] === undefined) {
                time[socketIds[socket.id]] = maxTime;
            }
            socket.join(data);
        }
    });

    socket.on("ready",()=>{
        if(rooms[socketIds[socket.id]].ready=== undefined){
            rooms[socketIds[socket.id]].ready=1;
        } else if(rooms[socketIds[socket.id]].ready===1 && rooms[socketIds[socket.id]].limit===2){
            rooms[socketIds[socket.id]].ready=2;
            io.to(socketIds[socket.id]).emit("start",1);
            rooms[socketIds[socket.id]].board.turn=1;
            intervals[socketIds[socket.id]] = setInterval(() => {
                if(rooms[socketIds[socket.id]].board.turn===1){ --timeintervals[socketIds[socket.id]].white;
                } else{ --timeintervals[socketIds[socket.id]].black;}
                io.to(socketIds[socket.id]).emit(
                    "timer",
                    timeintervals[socketIds[socket.id]]
                );
            }, 1000);

        }
    });

    socket.on("start_timer", (data) => {
        intervals[socketIds[socket.id]] = setInterval(() => {
            io.to(socketIds[socket.id]).emit(
                "time_left",
                --time[socketIds[socket.id]]
            );
            console.log(socketIds[socket.id]);
            console.log(time);
            console.log(time[socketIds[socket.id]]);
        }, 1000);
    });
    socket.on("stop_timer", (data) => {
        clearInterval(intervals[socketIds[socket.id]]);
    });

    socket.on("disconnect", () => {
        if(rooms[socketIds[socket.id]]){
        if(rooms[socketIds[socket.id]].white ===socket.id){
            console.log("trump");
            rooms[socketIds[socket.id]].white= undefined;
            rooms[socketIds[socket.id]].limit--;
            delete socketIds[socket.id];
        } else if(rooms[socketIds[socket.id]].black ===socket.id){
            console.log("imma rob you");
            rooms[socketIds[socket.id]].black= undefined;
            rooms[socketIds[socket.id]].limit--;
            delete socketIds[socket.id];
        }}


        console.log(`${socket.id} disconnected`);
    });
});

server.listen(4000, () => {
    console.log("listening on *:4000");
});
