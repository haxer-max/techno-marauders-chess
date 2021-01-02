module.exports =({ RoomId, rollno }) => {
    console.log(RoomId);
    //if (rooms[RoomId] === undefined || rooms[RoomId].limit < 2) {
    if (rooms[RoomId] === undefined) {
        console.log(RoomId);
        rooms[RoomId] = {};
        rooms[RoomId].white = socket.id;
        rooms[RoomId].limit = 1;
        rooms[RoomId].board = copyboard();
        console.log(rooms[RoomId]);
        timeintervals[RoomId] = {};
        timeintervals[RoomId].white = maxTime;
        timeintervals[RoomId].black = maxTime;
        socket.emit("roomid", {
            roomid: RoomId,
            isWhite: 1,
            board: rooms[RoomId].board,
            timeinterval: timeintervals[RoomId],
        })
        console.log("yay");
        
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
            console.log("y0");
        } else {
            rooms[RoomId].black = socket.id;
            rooms[RoomId].limit += 1;
            socket.emit("roomid", {
                roomid: RoomId,
                isWhite: 0,
                board: rooms[RoomId].board,
                timeinterval: timeintervals[RoomId],
            });
            console.log("hmm");
        }             
    }
    /*}else {
        rooms[RoomId].black = socket.id;
        rooms[RoomId].limit += 1;
        socket.emit("roomid", {
            roomid: RoomId,
            isWhite: 0,
            board: rooms[RoomId].board,
            timeinterval: timeintervals[RoomId],
        });
        console.log("hmm");   
    }*/
    socketIds[socket.id] = RoomId;
    if (time[socketIds[socket.id]] === undefined) {
        time[socketIds[socket.id]] = maxTime;
    }
    socket.join(RoomId);
}