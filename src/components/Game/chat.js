import React, { useState, useRef, useEffect } from "react";

import "./../../App.css";
import io from "socket.io-client";

//const socket = io('ws://localhost:4000');
/*
function App() {
  return (
    <div>
        <Game/>
    </div>
  );
}
*/
let socket;

const Game = ({ location }) => {
    const [messages, setMessages] = useState([]);
    const [g, setG] = useState(0);
    const [text, setText] = useState("");
    const socketRef = useRef();

    useEffect(() => {
        console.log(location.state)
        socket = io("http://localhost:4000");
        join(location.state.roomid)
        socket.on("connect", () => {
            console.log("connected");
        });
        socket.on("greeti", (message) => {
            setMessages((messages) => [...messages, message]);
        });

        socket.on("roomid", (data) => {
            setG(data);
            console.log(g);
            console.log("room " + data);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    function sendMsg(e) {
        e.preventDefault();
        socket.emit("greet", "hey");
        console.log("sent" + "hey");
    }

    function create() {
        socket.emit("create", "yay");
    }
    function join(roomid) {
        console.log("joining");
        socket.emit("join", roomid );
    }

    
    return (
        <div>
            <p>{location.state.roomid}</p>
            <div>
                {messages.map((message, index) => {
                    return <li key={index}>{message}</li>;
                })}
            </div>
            <div>
                <form onSubmit={sendMsg}>
                    <button type="submit">send</button>
                </form>
                <form onSubmit={sendMsg}>
                    <button type="submit">send</button>
                </form>
            </div>
        </div>
    );

};

export default Game;
