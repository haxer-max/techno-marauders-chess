import React, { useState, useEffect } from "react";
import "./../../App.css";
import Box from "./Board/box.js";
import io from "socket.io-client";
//import { render } from "@testing-library/react";
const serverURI = "http://localhost:4000";
const size = 9;
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            BoardState: [
                [1, 0, 2, 0, 3, 0, 1, 0, 4],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [5, 0, 6, 0, 7, 0, 5, 0, 8],
            ],
            walls:[
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0],
                [0, 1, 0, 0, 2, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 3, 0, 0],
                [0, 0, 0, 0, 2, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 4, 0, 0, 0, 0, 0, 2, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
            ]
        };
        this.selected = -1;

        this.socket = io(serverURI);
        this.movepiece=(i, j)=> {
            console.log("board state is " + i + " " + j);
            console.log(this.selected);
            //console.log(BoardState)
            if (this.selected === -1) {
                if (this.state.BoardState[i][j] !== 0) {
                    console.log(i * size + j);
                    this.selected = i * size + j;
                    console.log(this.selected);
                }
            } else {
                const aa = this.state.BoardState;
                console.log(aa);
                const aaa =aa[Math.floor(this.selected / size)][this.selected % size];
                aa[Math.floor(this.selected / size)][this.selected % size] = 0;
                aa[Math.floor(i)][j] = aaa;
                this.setState({
                    BoardState: aa,
                });
    
                this.selected = -1;
                console.log(this.selected);
            }
        };
    }

    componentDidMount() {
        this.join(this.props.location.state.roomid);
        this.socket.on("move", ({ i, j }) => {
            this.movepiece(i, j);
        });
    }
    emmitmoved(i, j) {
        this.socket.emit("moved", { i, j });
    }
    join(roomid) {
        console.log("joining");
        this.socket.emit("join", roomid);
    }



    renbox(i, j) {

        return (
            <Box
                key={j + i * size}
                colour={j + i * size}
                v={this.state.BoardState[i][j]}
                w={this.state.walls[i][j]}
                onClick={() => {
                    this.emmitmoved(i, j);
                }}
            />
        );
    }
    render() {
        let ll = [];
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                //console.log('a')
                ll.push(this.renbox(i, j));
            }
            ll.push(<span key={-i - 1}>&#010;</span>);
        }
        return (
            <div>
                <p>{this.props.location.state.roomid}</p>
                <div>
                    <h1>chess</h1>
                    {ll}
                </div>
            </div>
        );
    }
} 
export default Game;
