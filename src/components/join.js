import React, { useState, useRef, useEffect } from "react";
//import logo from "./logo.svg";
import "./../App.css";
//import Game from "./components/Game/game.js";
//import Game from "./components/Game/chat.js";
//import Game from "./components/Game/chat.js"
import { Link } from "react-router-dom";

export default function Join(){
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    return (
        <div>
            <div>
                <input
                    placeholder="Name"
                    type="text"
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div>
                <input
                    placeholder="Room"
                    type="text"
                    onChange={(event) => setRoom(event.target.value)}
                />
            </div>
            <Link
                onClick={(e) => (!name || !room ? e.preventDefault() : null)}
                to={{
                    pathname: "/game",
                    state: {
                        name: name,
                        roomid:room,
                    },
                }}
            >
                <button  type="submit">
                    Lets Go
                </button>
            </Link>
        </div>
    );
};


