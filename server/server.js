const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const cors = require("cors");
const mongoose = require("mongoose");
mongoose
//.connect("mongodb://localhost:27017/technoChess", {
    .connect("mongodb+srv://Shridam:Techno20@cluster0.zrjf3.mongodb.net/marauders_chess?retryWrites=true&w=majority", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log("DB Connected!"))
    .catch((err) => {
        console.log(`DB Connection Error: ${err.message}`);
    });

const Match = require("./matchs");
const whitescore=require("./whitescore");
const blackscore=require("./blackscore");

const maxTime = 20*60 ;//* 60;
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
const socketIds = {};
const rooms = {};
const time = {};
const intervals = {};
const timeintervals = {};

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
        //console.log(rooms[socketIds[socket.id]])
        io.to(socketIds[socket.id]).emit(
            "move",
            rooms[socketIds[socket.id]].board
        );
        if (rooms[socketIds[socket.id]].white === socket.id) {
            console.log("he is racist");
        }
    });

    socket.on("rotated", ({ board, wall }) => {
        console.log(rooms[socketIds[socket.id]].board.rot);
        if (rooms[socketIds[socket.id]].board.rot > 1) {
            console.log("rotationg");
            rooms[socketIds[socket.id]].board.BoardState = board;
            rooms[socketIds[socket.id]].board.walls = wall;
            rooms[socketIds[socket.id]].board.turn = rooms[socketIds[socket.id]]
                .board.turn? 0 : 1;
            rooms[socketIds[socket.id]].board.rot = 0;
            io.to(socketIds[socket.id]).emit(
                "move",
                rooms[socketIds[socket.id]].board
            );
            if (rooms[socketIds[socket.id]].white === socket.id) {
                console.log("he is racist");
            }
        }
    });

    socket.on("join", ({ data, rollno }) => {
        console.log(data);
        if (rooms[data] === undefined || rooms[data].limit < 2) {
            if (rooms[data] === undefined) {
                console.log(data);
                Match.findOne({ room: data })
                    .exec()
                    .then((match) => {
                        if (match !== null) return;
                        rooms[data] = {};
                        rooms[data].white = socket.id;
                        rooms[data].limit = 1;
                        rooms[data].board = copyboard();
                        console.log(rooms[data]);
                        timeintervals[data] = {};
                        timeintervals[data].white = maxTime;
                        timeintervals[data].black = maxTime;
                        socket.emit("roomid", {
                            roomid: data,
                            isWhite: 1,
                            board: rooms[data].board,
                            timeinterval: timeintervals[data],
                        });
                        const match2 = new Match({
                            _id: new mongoose.Types.ObjectId(),
                            userw: rollno,
                            room: data,
                        });
                        match2.save();
                        console.log("yay");
                    });
            } else {
                if (rooms[data].white === undefined) {
                    Match.findOne({ room: data }).then((match) => {
                        if (match.winner !== undefined) return;
                        if (match.userw === rollno) {
                            rooms[data].white = socket.id;
                            rooms[data].limit += 1;
                            if (rooms[data].whiteTime === undefined)
                                rooms[data].whiteTime = maxTime;
                            socket.emit("roomid", {
                                roomid: data,
                                isWhite: 1,
                                board: rooms[data].board,
                                timeinterval: timeintervals[data],
                            });
                            console.log("y0");
                        } else if (match.userb === rollno) {
                            rooms[data].black = socket.id;
                            rooms[data].limit += 1;
                            socket.emit("roomid", {
                                roomid: data,
                                isWhite: 0,
                                board: rooms[data].board,
                                timeinterval: timeintervals[data],
                            });
                            console.log("hmm");
                        }
                    });
                } else {
                    Match.findOne({ room: data }).then((match) => {
                        if (match.winner !== undefined) return;
                        rooms[data].black = socket.id;
                        rooms[data].limit += 1;
                        socket.emit("roomid", {
                            roomid: data,
                            isWhite: 0,
                            board: rooms[data].board,
                            timeinterval: timeintervals[data],
                        });
                        console.log("hmm");
                        match.userb = rollno;
                        match.save();
                    });
                }
            }
            socketIds[socket.id] = data;
            if (time[socketIds[socket.id]] === undefined) {
                time[socketIds[socket.id]] = maxTime;
            }
            socket.join(data);
        }
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
                        Match.findOne({ room: socketIds[socket.id] }).then(
                            (match) => {
                                match.winner = 0;
                                match.wtime=timeintervals[socketIds[socket.id]].white;
                                match.btime=timeintervals[socketIds[socket.id]].black;
                                match.wpoint=whitescore(rooms[socketIds[socket.id]].board.BoardState);
                                match.bpoint=blackscore(rooms[socketIds[socket.id]].board.BoardState);
                                match.save();
                            }
                        );
                        clearInterval(intervals[socketIds[socket.id]]);
                    }
                } else {
                    --timeintervals[socketIds[socket.id]].black;
                    if (timeintervals[socketIds[socket.id]].black < 1) {
                        io.to(socketIds[socket.id]).emit("ended", 1);
                        Match.findOne({ room: socketIds[socket.id] }).then(
                            (match) => {
                                match.winner = 1;
                                match.wtime=timeintervals[socketIds[socket.id]].white;
                                match.btime=timeintervals[socketIds[socket.id]].black;
                                match.wpoint=whitescore(rooms[socketIds[socket.id]].board.BoardState);
                                match.bpoint=blackscore(rooms[socketIds[socket.id]].board.BoardState);
                                match.save();
                            }
                        );
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

    socket.on("start_timer", (data) => {
        intervals[socketIds[socket.id]] = setInterval(() => {
            //if()
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
        clearInterval(timeintervals[socketIds[socket.id]]);
    });

    socket.on("win", (data) => {
        console.log(data + "its over");
        io.to(socketIds[socket.id]).emit("ended", data);
        Match.findOne({ room: socketIds[socket.id] })
            .exec()
            .then((match) => {
                match.winner = data;
                match.wtime=timeintervals[socketIds[socket.id]].white;
                match.btime=timeintervals[socketIds[socket.id]].black;
                match.wpoint=whitescore(rooms[socketIds[socket.id]].board.BoardState);
                match.bpoint=blackscore(rooms[socketIds[socket.id]].board.BoardState);
                match.save();
            })
            .catch((err)=>{
                console.log(err)
            })
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
        }

        console.log(`${socket.id} disconnected`);
    });
});

server.listen(4000, () => {
    console.log("listening on *:4000");
});
