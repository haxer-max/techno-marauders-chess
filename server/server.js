const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const cors = require("cors");
const mongoose = require("mongoose");

const whitescore=require("./whitescore");
const blackscore=require("./blackscore");
const joinlogic=require("./joinlogic");
const maxTime = 20*60 ;
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
    turn: 1,
    rot: 2,
    ended:0,
    gamestarted:0
};
const rooom = {
    white: "id",
    black: "id",
    turn: 0,
    limit: 1,
    board: "initboard",
    ready: 0,
    bscore: 10,
    bscore: 10,
};
const socketIds = {};  //maps socketit to roomid
const rooms = {};   // maps roomid to room detalils
const intervals = {}; //contains interval function
const timeintervals = {}; // contains time

app.use(cors({ origin: "http://localhost:3000" }));

const copyboard = () => {
    const newboard = {};
    newboard.BoardState = initboard.BoardState.map(function (arr) {
        return arr.slice();
    });
    newboard.walls = initboard.walls.map(function (arr) {
        return arr.slice();
    });
    newboard.turn = -1;
    newboard.rot=2,
    newboard.ended=0;
    newboard.gamestarted=0;
    return newboard;
};

io.on("connection", (socket) => {
    console.log(`${socket.id} connected`);

    socket.on("moved", (data) => {
        rooms[socketIds[socket.id]].board.BoardState = data;
        rooms[socketIds[socket.id]].board.turn = rooms[socketIds[socket.id]]
            .board.turn
            ? 0
            : 1;
        ++rooms[socketIds[socket.id]].board.rot;
        io.to(socketIds[socket.id]).emit(
            "move",
            rooms[socketIds[socket.id]].board
        );
    });

    socket.on("rotated", ({ board, wall }) => {
        if (rooms[socketIds[socket.id]].board.rot > 1) {
            rooms[socketIds[socket.id]].board.BoardState = board;
            rooms[socketIds[socket.id]].board.walls = wall;
            rooms[socketIds[socket.id]].board.turn = rooms[socketIds[socket.id]].board.turn? 0 : 1;
            rooms[socketIds[socket.id]].board.rot = 0;
            io.to(socketIds[socket.id]).emit(
                "move",
                rooms[socketIds[socket.id]].board
            );
        }
    });

    socket.on("join", ({ RoomId, rollno }) => {
        console.log("roomid ")
        console.log(RoomId);
        console.log(rollno)
        if (rooms[RoomId] === undefined) {
            rooms[RoomId] = {};
            rooms[RoomId].white = socket.id;
            rooms[RoomId].limit = 1;
            rooms[RoomId].board = copyboard();
            timeintervals[RoomId] = {};
            timeintervals[RoomId].white = maxTime;
            timeintervals[RoomId].black = maxTime;
            socket.emit("roomid", {
                roomid: RoomId,
                isWhite: 1,
                board: rooms[RoomId].board,
                timeinterval: timeintervals[RoomId],
            })
            
        } else if(rooms[RoomId].limit < 2) {
            if (rooms[RoomId].white === undefined) {
                rooms[RoomId].white = socket.id;
                rooms[RoomId].limit += 1;
                socket.emit("roomid", {
                    roomid: RoomId,
                    isWhite: 1,
                    board: rooms[RoomId].board,
                    timeinterval: timeintervals[RoomId],
                });
            } else {
                rooms[RoomId].black = socket.id;
                rooms[RoomId].limit += 1;
                socket.emit("roomid", {
                    roomid: RoomId,
                    isWhite: 0,
                    board: rooms[RoomId].board,
                    timeinterval: timeintervals[RoomId],
                });
            }             
        }
        socketIds[socket.id] = RoomId;
        socket.join(RoomId);
        console.log(RoomId)
    });

    socket.on("ready", () => {
        if(rooms[socketIds[socket.id]]===undefined) return;
        if (rooms[socketIds[socket.id]].ready === undefined) {
            rooms[socketIds[socket.id]].ready = 1;
        } else if (
            rooms[socketIds[socket.id]].ready === 1 &&
            rooms[socketIds[socket.id]].limit === 2
        ) {
            rooms[socketIds[socket.id]].ready = 2;
            io.to(socketIds[socket.id]).emit("start", 1);
            rooms[socketIds[socket.id]].board.turn = 1;
            rooms[socketIds[socket.id]].board.rot = 2;
            rooms[socketIds[socket.id]].board.gamestarted = 1;
            intervals[socketIds[socket.id]] = setInterval(() => {
                if (rooms[socketIds[socket.id]].board.turn === 1) {
                    --timeintervals[socketIds[socket.id]].white;
                    if (timeintervals[socketIds[socket.id]].white < 1) {
                        io.to(socketIds[socket.id]).emit("ended", 0);
                        clearInterval(intervals[socketIds[socket.id]]);
                    }
                } else {
                    --timeintervals[socketIds[socket.id]].black;
                    if (timeintervals[socketIds[socket.id]].black < 1) {
                        io.to(socketIds[socket.id]).emit("ended", 1);
                        clearInterval(intervals[socketIds[socket.id]]);
                    }
                }
                io.to(socketIds[socket.id]).emit(
                    "timer",
                    timeintervals[socketIds[socket.id]]
                );
            }, 1000);
        }
    });

    socket.on("stop_timer", (data) => {
        clearInterval(timeintervals[socketIds[socket.id]]);
    });

    socket.on("win", (data) => {
        console.log(data + "its over");
        io.to(socketIds[socket.id]).emit("ended", data);
        clearInterval(intervals[socketIds[socket.id]]);
    });

    socket.on("disconnect", () => {
        if (rooms[socketIds[socket.id]]) {
            if (rooms[socketIds[socket.id]].white === socket.id) {
                rooms[socketIds[socket.id]].white = undefined;
                rooms[socketIds[socket.id]].limit--;
            } else if (rooms[socketIds[socket.id]].black === socket.id) {
                rooms[socketIds[socket.id]].black = undefined;
                rooms[socketIds[socket.id]].limit--;
            }
            if(rooms[socketIds[socket.id]].limit==0){
                delete rooms[socketIds[socket.id]];
                clearInterval(intervals[socketIds[socket.id]])
                delete intervals[socketIds[socket.id]];
                delete timeintervals[socketIds[socket.id]];
                
            }
            delete socketIds[socket.id];
            console.log(rooms)
            console.log(socketIds)
            console.log(intervals)
            console.log(timeintervals)
            
        }
        
        console.log(`${socket.id} disconnected`);
    });
});

server.listen(4000, () => {
    console.log("listening on *:4000");
});
