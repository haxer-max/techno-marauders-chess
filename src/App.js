import React, { useState, useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Game from "./components/Game/game.js";
//import Game from "./components/Game/chat.js";
import Join from "./components/join.js"
import { BrowserRouter as Router, Route } from "react-router-dom";



function App() {
  return (
    <div>
        <Router>
        <Route path="/" exact component={Join} />
        <Route path="/game" component={Game} />
        </Router>
    </div>
  );
}
/*
import io from "socket.io-client";
const socket = io('ws://localhost:4000');
let socket;

const App = () => {
    const soc = { socket: undefined };
    const [messages, setMessages] = useState(["a", "b"]);
    const [g, setG] = useState(0);
    const [text, setText] = useState("");
    const socketRef = useRef();

    useEffect(() => {
        socket = io("http://localhost:4000");

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
    function join() {
        console.log("joining");
        socket.emit("join", text);
    }

    if (g === 0) {
        return (
            <div>
                <button
                    onClick={() => {
                        create(soc);
                    }}
                >
                    create
                </button>

                <input
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                    value={text}
                    type="text"
                />
                <p>{text}</p>
                <button onClick={join}>join</button>
            </div>
        );
    } else {
        return (
            <div>
                <p>{g}</p>
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
    }
};
*/
export default App;
