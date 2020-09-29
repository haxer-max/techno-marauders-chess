import React, { useState, useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Game from "./components/Game/game.js";
import io from "socket.io-client";

//const socket = io('ws://localhost:4000');

function App() {
  return (
    <div>
        <Game/>
    </div>
  );
}
/*

const App = () => {
    const [messages, setMessages] = useState([]);
    const socketRef = useRef();
    useEffect(() => {
        socketRef.current = io("http://localhost:4000");

        socketRef.current.on("connect", () => {
            console.log("connected");
        });
        socketRef.current.on("greeti", (data) => {
            setMessages([...messages, data]);
            console.log("got" + data);
            //recieveMsg(data);
        });

        return () => {
            socketRef.current.disconnect();
        };
    });

    function sendMsg(e) {
        e.preventDefault();

        socketRef.current.emit("greet", "hey");
        console.log("sent" + "hey");
    }


    return (
        <div>
            <div>
                {messages.map((message, index) => {
                    return <li key={index}>{message}</li>;
                })}
            </div>
            <div>
                <form onSubmit={sendMsg}>
                    <button type="submit">send</button>
                </form>
            </div>
        </div>
    );
};

*/
export default App;
