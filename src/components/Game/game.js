import React from "react";
import "./../../App.css";
import Box from "./Board/box.js";
import io from "socket.io-client";
import piecelogic from "./Board/piecelogic";
import pieceRotation from "./Board/pieceRotation";
import wallRotation from "./Board/wallRotation";
import whitescore from "./Board/whitescore";
import blackscore from "./Board/blackscore";
import greenlogic from "./Board/greenlogic";
import {AboutModal} from "./AboutModal";
import {RulesModal} from "./RulesModal";
//import wallslogicc from "./Board/wallslogicc"
//import { render } from "@testing-library/react";

const serverURI = "http://localhost:4000";
const sizex = 15;
const sizey = 10;
const initgreen= [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            BoardState: [
                [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
            ],
            walls: [
                [2, 3, 1, 4, 0, 4, 3, 3, 0, 1, 0, 3, 4, 0, 3],
                [0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 4, 0, 3, 0, 0],
                [4, 3, 0, 3, 0, 4, 0, 0, 4, 0, 0, 0, 4, 0, 0],
                [0, 4, 0, 0, 4, 4, 0, 3, 3, 0, 3, 0, 0, 3, 2],
                [0, 0, 0, 3, 2, 3, 0, 0, 4, 3, 0, 3, 2, 0, 0],
                [3, 3, 4, 0, 3, 4, 3, 3, 0, 0, 4, 0, 0, 0, 0],
                [4, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 3, 4, 3, 0],
                [0, 4, 3, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 4, 0],
                [3, 0, 0, 4, 3, 4, 0, 3, 3, 0, 0, 4, 0, 3, 0],
                [0, 4, 0, 1, 0, 3, 0, 0, 4, 0, 4, 0, 3, 0, 4],
            ],
            timeLeft: 60 * 20,
            whiteTime:60*20,
            blackTime:60*20,
            gamestarted:0,
            turn:-1,
            green: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
        };

        this.selectedboxI = -1;
        this.selectedboxJ = -1;
        this.selectedPiece = -1;
        this.counter = 0;
        this.turn=-1;
        //this.isWhite=undefined;
        this.socket = io(serverURI);
        this.score1=0;
        this.score2=0;
        this.timeallocateblack= "timeallocate";
        this.timeallocatewhite= "timeallocate1";
        this.timeallocatetemp="timeallocate1"
        

        this.movepiece = (i, j) => {
            if(this.state.gamestarted===0) return;
            this.score1 = whitescore(this.state.BoardState);
            this.score2 = blackscore(this.state.BoardState);
            if(this.state.turn==!this.isWhite) return; 
            if (this.selectedPiece === -1) {
                if (this.state.BoardState[i][j] !== 0) {
                    this.selectedboxI = i;
                    this.selectedboxJ = j;
                    if (this.state.BoardState[i][j] > 0) {
                        if ((this.isWhite === 1 && this.state.BoardState[i][j] < 5) ||
                            (this.isWhite === 0 && this.state.BoardState[i][j] > 4)   
                        ){
                            this.selectedPiece = this.state.BoardState[i][j];
                            greenlogic(i,j,this.state.BoardState,this.state.walls,this.state.green);       
                        }
                        
                    }
                }
            }
            else {
                const boardtemp = this.state.BoardState.map(function (arr) {
                    return arr.slice();
                });
                
                if(this.state.green[i][j]===1){
                    boardtemp[i][j]=this.selectedPiece;
                    boardtemp[this.selectedboxI][this.selectedboxJ]=0;
                    this.socket.emit("moved", boardtemp);
                     
                }
                
                /*piecelogic(
                    boardtemp,
                    this.selectedPiece,
                    this.selectedboxI,
                    this.selectedboxJ,
                    i,
                    j
                );*/

                /*let defcounter = 0;
                for (let i = 0; i < 10; i++) {
                    if (defcounter === 1) {
                        break;
                    }
                    for (let j = 0; j < 15; j++) {
                        if (this.state.BoardState[i][j] !== boardtemp[i][j]) {
                            defcounter=1;
                            break;
                        }
                    }
                }*/
                
                //if (defcounter) {
                  //  this.socket.emit("moved", boardtemp);
                //}

                //console.log("Counter is " + this.counter);
                
                //console.log("white score is "+this.score1+". and  black score is "+this.score2);
                this.selectedPiece = -1;
                this.timeallocatetemp=this.timeallocatewhite;
                this.timeallocatewhite=this.timeallocateblack;
                this.timeallocateblack=this.timeallocatetemp; 
                this.setState({
                    green:initgreen.map(function (arr) {
                        return arr.slice();
                    }),
                });
                
            }
        };
        
    }    
    rotate(i,j){
        const boardtemp = this.state.BoardState.map(function (arr) {
            return arr.slice();
        });
        const wallstemp = this.state.walls.map(function(arr){
            return arr.slice();
        });
        wallRotation(wallstemp,i,j, this.isWhite);
        pieceRotation(boardtemp,i,j, this.isWhite);
        this.socket.emit("rotated", {board:boardtemp, wall:wallstemp});
    }   

    componentDidMount() {
        this.join(this.props.location.state.roomid);
        this.socket.on("move", (boardtemp) => {
            this.setState(boardtemp);
        });
        this.socket.on("roomid", ({ roomid, isWhite, board,timeinterval }) => {
            this.isWhite = isWhite;
            this.setState(board);
            this.setState({
                whiteTime:timeinterval.white,
                blackTime:timeinterval.black,
            });
            //this.state.whiteTime=timeinterval.white;
            //this.state.blackTime=timeinterval.black;
            
        });
        this.socket.on("disconnect", function () {
            console.log("bye bye");
        });
        this.socket.on("time_left", (data) => {
            this.setState({
                timeLeft: data,
            });
        });
        this.socket.on("timer", (timeinterval) => {
            this.setState({
                whiteTime:timeinterval.white,
                blackTime:timeinterval.black,
            });
        });
        this.socket.on("start",(data)=>{
            this.state.gamestarted=data;
            this.state.turn=1;
        });
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
                    this.movepiece(i, j);
                }}
                isgreen={this.state.green[i][j]}
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
            <div className="main">
                <div className="navbar">
                    <p className="roomid">Your Room ID is {this.props.location.state.roomid}</p>
                    <h2 className="chess">Marauders chess</h2>
                    <nav>
                        <AboutModal />
                        <RulesModal />
                    </nav>
                    {(()=>{
                        if(this.isWhite!==undefined){
                            if(this.isWhite===1) return <h2 class="you">You are White</h2>
                            else return <h2 class="you">You are Black</h2>
                        }
                    })()}
                </div>
                <div className="boardclass">
                    <div style={{ display: "flex" }}>
                        <button className="rotatebutton" onClick={() => {
                            this.rotate(0,0);
                        }}> Rotate </button>
                        <button className="rotatebutton" onClick={() => {
                            this.rotate(0,5);
                        }}> Rotate </button>
                        <button className="rotatebutton" onClick={() => {
                            this.rotate(0,10)
                        }}> Rotate </button>
                    </div>
                    <div>{ll}</div>
                    <div style={{ display: "flex" }}>
                        <button className="rotatebutton" onClick={() => {
                            this.rotate(5,0)
                        }}> Rotate </button>
                        <button className="rotatebutton" onClick={() => {
                            this.rotate(5,5)
                        }}> Rotate </button>
                        <button className="rotatebutton" onClick={() => {
                            this.rotate(5,10)
                        }}> Rotate </button>
                    </div>
                </div>
                
                <div className="timer">
                    <button className="ready" onClick={()=>{this.socket.emit("ready",1)}}>Ready</button>
                    {/* {this.state.timeLeft} */}
                    <button className="start"
                        onClick={() => {
                            this.socket.emit("start_timer", 1);
                        }}
                    >
                        Start
                    </button>
                    <button className="stop"
                        onClick={() => {
                            this.socket.emit("stop_timer", 1);
                        }}
                    >
                        Stop
                    </button>
                          
                    <p className={this.timeallocatewhite}>White is left with <p className="timeremain">{Math.floor((this.state.whiteTime)/60)}min {(this.state.whiteTime)%60}sec</p></p>
                    <p className={this.timeallocateblack}>Black is left with <p className="timeremain">{Math.floor((this.state.blackTime)/60)}min {(this.state.blackTime)%60}sec</p></p>
                </div>
                <div className="footer1">
                    Copyright &copy; 2019-2020 <a href="https://technothlon.techniche.org.in/" target="_blank">Technotholon</a>. All right Reserved
                </div>
                
            </div>
        );
    }
}

export default Game;