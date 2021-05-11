import React, { useState } from "react";
import "./../join.css";
import { Link } from "react-router-dom";
import techno from "./Game/images/maradures.png"

export default function Join(){
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    return (
        <div className="joinOuterContainer">
      <div className="joinInnerContainer">
      <img class="image" src={techno} alt="Technotholon" width="150" height="150"></img>
        <h1 className="heading">Marauders Chess</h1>
        <h2 className="subheading">Technothlon</h2>
        <div>
          <input placeholder="Name" className="joinInputname" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <hr></hr>
        <div>
          <input placeholder="Room" className="joinInputjoin mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={{pathname:`/game`,state: {name: name, roomid:room}}}>
          <button className={'button mt-20'} type="submit">Join Game</button>
        </Link>
        
        <h3>OR</h3>
        <Link onClick={e => (!name) ? e.preventDefault() : null} 
            to={{
                pathname:`/game`,
                state: {
                    name: name,
                    roomid:(Date.now()%(36**5)).toString(36)+ Math.floor((Math.random() * 36)).toString(36)}
                }
            }
        >
          <button className={'buttonc '} type="submit">Create Game</button>
        </Link>
        </div>
      </div>
    
    
    </div>
    );
};