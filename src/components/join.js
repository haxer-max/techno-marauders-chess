import React, { useState } from "react";
//import logo from "./logo.svg";
import "./../join.css";
//import Game from "./components/Game/game.js";
//import Game from "./components/Game/chat.js";
//import Game from "./components/Game/chat.js"
import { Link } from "react-router-dom";
import techno from "./Game/images/techno.jpg"

export default function Join(){
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    return (
        <div className="form-signin">
            <img class="image" src={techno} alt="Technotholon" width="100" height="100"></img>
            <h1 class="heading">Please sign in</h1>
            <input type="text" id="inputname" class="form-control" onChange={(event) => setName(event.target.value)} placeholder="Roll No" required autofocus></input>
            <input type="text" id="inputroom" class="form-control" onChange={(event) => setRoom(event.target.value)} placeholder="Room" required></input>
            <div>
            <Link onClick={(e) => (!name || !room ? e.preventDefault() : null)} to={{ pathname: "/game", state: {name: name, roomid:room,},}}>
                <button class="submit" type="submit">Lets Go!</button>
            </Link>
            </div>
            <p class="copyright">&copy; Technotholon</p>
        </div>
    );
};