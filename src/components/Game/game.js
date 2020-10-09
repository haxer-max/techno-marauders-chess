import React, { useState, useEffect } from "react";
import "./../../App.css";
import Box from "./Board/box.js";
import io from "socket.io-client";
import piecelogic from './Board/piecelogic';
//import { render } from "@testing-library/react";
const serverURI = "http://localhost:4000";
const size = 9;
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            BoardState: [
                [1, 0, 2, 0, 3, 0, 4, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [5, 0, 6, 0, 7, 0, 8, 0, 9],
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
        const rot=1;
        if(rot !==0){
            var newArray = [];
            var newArray2 = [];
            for(var q=0;q<9;q++){
                newArray.push([]);
                newArray2.push([]);
            };

            for(var q=0;q<9;q++){
                for(var w=0;w<9;w++){
                    /* newArray[w].push(this.state.BoardState[w][8-q]);
                    newArray2[w].push(this.state.walls[w][8-q]); */
                    newArray[q][w]=this.state.BoardState[w][8-q];
                    newArray2[q][w]=this.state.walls[w][8-q];
                    console.log(newArray2);
                    if(newArray2[q][w]===1){
                        newArray2[q][w]=2;
                    }
                    else if(newArray2[q][w]===2){
                        newArray2[q][w]=3;
                    }
                    else if(newArray2[q][w]===3){
                        newArray2[q][w]=4;
                    }
                    else if(newArray2[q][w]===4){
                        newArray2[q][w]=1;
                    }
                };
            };
            /* for(var q=0;q<9;q++){
                for(var w=0;w<9;w++){
                    if(newArray2[q][w]===1){
                        newArray2[q][w]=2;
                    }
                    if(newArray2[q][w]===2){
                        newArray2[q][w]=3;
                    }
                    if(newArray2[q][w]===3){
                        newArray2[q][w]=4;
                    }
                    if(newArray2[q][w]===4){
                        newArray2[q][w]=1;
                    }
                }
            } */
            this.state.BoardState = newArray;
            this.state.walls = newArray2;
        }
        this.selectedboxI=-1;
        this.selectedboxJ=-1;
        this.selectedPiece=-1;
        this.socket = io(serverURI);

        this.movepiece=(i, j)=> {
            console.log("board state is " + i + " " + j);
            if (this.selectedPiece === -1 ) {
                if (this.state.BoardState[i][j] !== 0) {
                    this.selectedboxI=i;
                    this.selectedboxJ=j;
                    if(this.state.BoardState[i][j]===1) this.selectedPiece = 1;
                    else if(this.state.BoardState[i][j]===4) this.selectedPiece = 4;
                    else if(this.state.BoardState[i][j]===2) this.selectedPiece = 2;
                    else if(this.state.BoardState[i][j]===3) this.selectedPiece = 3;
                    else if(this.state.BoardState[i][j]===5) this.selectedPiece = 5;
                    else if(this.state.BoardState[i][j]===8) this.selectedPiece = 8;
                    else if(this.state.BoardState[i][j]===6) this.selectedPiece = 6;
                    else if(this.state.BoardState[i][j]===7) this.selectedPiece = 7;
                }
            }else{
                let boardtemp= this.state.BoardState.map(function(arr) {
                    return arr.slice();
                });
                this.setState({
                    BoardState:piecelogic(boardtemp,this.selectedPiece,this.selectedboxI,this.selectedboxJ,i,j)
                })
                this.selectedPiece=-1;
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
