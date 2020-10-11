import React, { useState, useEffect } from "react";
import "./../../App.css";
import Box from "./Board/box.js";
import io from "socket.io-client";
import piecelogic from './Board/piecelogic';
import pieceRotaion from './Board/PieceRotation';
import wallRotation from './Board/wallRotation';
//import { render } from "@testing-library/react";
const serverURI = "http://localhost:4000";
const sizex = 15;
const sizey = 10;
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            BoardState: [
                [1, 0, 2, 0, 3, 0, 1, 0, 4, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [5, 0, 6, 0, 7, 0, 5, 0, 8, 0, 9, 0, 0, 0, 0],
            ],
            walls:[
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 4, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
            timeLeft:60*20,
        };


        this.selectedboxI=-1;
        this.selectedboxJ=-1;
        this.selectedPiece=-1;
        this.counter=0;
        this.isWhite=0;
        this.socket = io(serverURI);

        this.movepiece=(i, j)=> {
            console.log("board state is " + i + " " + j);
            if (this.selectedPiece === -1 ) {
                if (this.state.BoardState[i][j] !== 0) {
                    this.selectedboxI=i;
                    this.selectedboxJ=j;
                    if(this.isWhite===1){
                        if(this.state.BoardState[i][j]===1) this.selectedPiece = 1;
                        else if(this.state.BoardState[i][j]===4) this.selectedPiece = 4;
                        else if(this.state.BoardState[i][j]===2) this.selectedPiece = 2;
                        else if(this.state.BoardState[i][j]===3) this.selectedPiece = 3;
                    }else if(this.isWhite===0){
                        if(this.state.BoardState[i][j]===5) this.selectedPiece = 5;
                        else if(this.state.BoardState[i][j]===8) this.selectedPiece = 8;
                        else if(this.state.BoardState[i][j]===6) this.selectedPiece = 6;
                        else if(this.state.BoardState[i][j]===7) this.selectedPiece = 7;
                    }
                }
            }
            else{
                let boardtemp= this.state.BoardState.map(function(arr) {
                    return arr.slice();
                });
                /* if(this.state.BoardState !== piecelogic(boardtemp,this.selectedPiece,this.selectedboxI,this.selectedboxJ,i,j)){
                    this.counter +=1;
                    console.log("Counter is"+ this.counter);
                } */
                var oldArray = this.state.BoardState;
                console.log(oldArray);
                this.setState({
                    BoardState:piecelogic(boardtemp,this.selectedPiece,this.selectedboxI,this.selectedboxJ,i,j)
                })
                var newArray = this.state.BoardState;
                console.log(newArray);
                /* if(this.selectedPiece===1 || this.selectedPiece===2 || this.selectedPiece===3 || this.selectedPiece===4){
                    this.selectedPiece=-2;
                    console.log(this.selectedPiece);
                }else if(this.selectedPiece===5 || this.selectedPiece===6 || this.selectedPiece===7 || this.selectedPiece===8){
                    this.selectedPiece=-1;
                    console.log(this.selectedPiece);
                } */
                var defcounter=this.counter;
                for (var i=0;i<10;i++){
                    if(defcounter!==this.counter){
                        break;
                    }
                    for (var j=0;j<15;j++){
                        if(oldArray[i][j]!==newArray[i][j]){
                            this.counter +=1;
                            break;
                        }
                    }
                }
                console.log("Counter is " +this.counter);
                this.selectedPiece=-1;
            }
        };
    }

    componentDidMount() {
        this.join(this.props.location.state.roomid);
        this.socket.on("move", ({ i, j }) => {
            this.movepiece(i, j);
        });
        this.socket.on('disconnect', function() {
            console.log("bye bye")
        });
        this.socket.on('time_left',(data)=>{
            this.setState({
                timeLeft:data
            })
        })

    }
    emmitmoved(i, j) {
        this.socket.emit("moved", { i, j });
    }
    join(roomid) {
        console.log("joining");
        this.socket.emit("join", roomid);
    }



    renbox(i, j) {
        //console.log(i+" idsj f "+j + " adf "+ this.state.BoardState[i][j])
        return (
            <Box
                key={j + i * sizex}
                colour={j + i * sizex}
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
        for (var i = 0; i < sizey; i++) {
            for (var j = 0; j < sizex; j++) {
                ll.push(this.renbox(i, j));
            }
            ll.push(<span key={-i - 1}>&#010;</span>);
        }
        return (
            <div>
                <p>{this.props.location.state.roomid}</p>
                <div>
                    <h1>chess</h1>
                    <div style={{display:"flex"}}>
                        <button className="rotatebutton" > rotate </button>
                        <button className="rotatebutton" > rotate </button>
                        <button className="rotatebutton" > rotate </button>
                    </div>
                    <div>
                        {ll}
                    </div>
                    <div style={{display:"flex"}}>
                        <button className="rotatebutton" > rotate </button>
                        <button className="rotatebutton" > rotate </button>
                        <button className="rotatebutton" > rotate </button>
                    </div>
                </div>
                <div>
                    {this.state.timeLeft}
                    <button onClick={()=>{
                        this.socket.emit('start_timer',1);    
                    }}>start</button>
                    <button onClick={()=>{
                        this.socket.emit('stop_timer',1);    
                    }}>stop</button>
                </div>
            </div>
        );
    }
} 
export default Game;
