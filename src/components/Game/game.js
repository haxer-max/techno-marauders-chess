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
        this.selectedboxI=-1;
        this.selectedboxJ=-1;
        this.selectedPiece=-1;
        this.socket = io(serverURI);

        this.movepiece=(i, j)=> {
            console.log("board state is " + i + " " + j);
            //console.log(this.selected);
            //const d=0;
            //const e=0;
            //console.log(BoardState)
            if (this.selectedPiece === -1) {
                if (this.state.BoardState[i][j] !== 0) {
                    console.log(i * size + j);
                    this.selectedboxI=i;
                    this.selectedboxJ=j;

                    //console.log(this.selected);
                    if(this.state.BoardState[i][j]===1 || this.state.BoardState[i][j]===5){
                        this.selectedPiece = 1;
                    }
                    if(this.state.BoardState[i][j]===4 || this.state.BoardState[i][j]===8){
                        this.selectedPiece = 4;
                    }
                    if(this.state.BoardState[i][j]===2 || this.state.BoardState[i][j]===6){
                        this.selectedPiece = 2;
                    }
                    if(this.state.BoardState[i][j]===3 || this.state.BoardState[i][j]===7){
                        this.selectedPiece = 3;
                    }
                    /* var d=i;
                    var e=j; */
                    console.log(this.selectedPiece);
                    console.log(this.selectedboxI);
                    console.log(this.selectedboxJ);
                }
            }else{
                if(this.selectedPiece===1){
                const aa=this.state.BoardState;
                console.log("working");
                console.log(this.selectedboxI);
                const first = [1,2,2,1,-1,-2,-2,-1];
                const second = [2,1,-1,-2,-2,-1,1,2];
                for(var k=0;k<8;k++){
                    if(first[k]+this.selectedboxI===i && second[k]+this.selectedboxJ===j){
                        this.state.BoardState[i][j]=this.state.BoardState[this.selectedboxI][this.selectedboxJ];
                        this.state.BoardState[this.selectedboxI][this.selectedboxJ]=0;
                        console.log(this.state.BoardState);
                        const aa=this.state.BoardState;
                        this.setState({
                            BoardState: aa,
                        });
                        
                        break;
                    }
                }
                this.selectedPiece=-1;
            }else if(this.selectedPiece===2){
                const aa=this.state.BoardState;
                console.log("working");
                console.log(this.selectedboxJ);
                const first = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,-1,-2,-3,-4,-5,-6,-7,-8,-9,-1,-2,-3,-4,-5,-6,-7,-8,-9];
                const second = [1,2,3,4,5,6,7,8,9,-1,-2,-3,-4,-5,-6,-7,-8,-9,1,2,3,4,5,6,7,8,9,-1,-2,-3,-4,-5,-6,-7,-8,-9,];
                for(var k=0;k<36;k++){
                    if(first[k]+this.selectedboxI===i && second[k]+this.selectedboxJ===j){
                        this.state.BoardState[i][j]=this.state.BoardState[this.selectedboxI][this.selectedboxJ];
                        this.state.BoardState[this.selectedboxI][this.selectedboxJ]=0;
                        console.log(this.state.BoardState);
                        const aa=this.state.BoardState;
                        this.setState({
                            BoardState: aa,
                        });
                        
                        break;
                    }
                }
                this.selectedPiece=-1;
            }else if(this.selectedPiece===3){
                const aa=this.state.BoardState;
                console.log("working");
                console.log(this.selectedboxI);
                const first = [1,2,3,4,5,6,7,8,9,-1,-2,-3,-4,-5,-6,-7,-8,-9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                const second = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,-1,-2,-3,-4,-5,-6,-7,-8,-9];
                for(var k=0;k<36;k++){
                    if(first[k]+this.selectedboxI===i && second[k]+this.selectedboxJ===j){
                        this.state.BoardState[i][j]=this.state.BoardState[this.selectedboxI][this.selectedboxJ];
                        this.state.BoardState[this.selectedboxI][this.selectedboxJ]=0;
                        console.log(this.state.BoardState);
                        const aa=this.state.BoardState;
                        this.setState({
                            BoardState: aa,
                        });
                        
                        break;
                    }
                }
                this.selectedPiece=-1;
            }else if(this.selectedPiece===4){
                const aa=this.state.BoardState;
                console.log("working");
                console.log(this.selectedboxI);
                const first = [0,1,1,1,0,-1,-1,-1];
                const second = [1,1,0,1,-1,-1,0,1];
                for(var k=0;k<8;k++){
                    if(first[k]+this.selectedboxI===i && second[k]+this.selectedboxJ===j){
                        this.state.BoardState[i][j]=this.state.BoardState[this.selectedboxI][this.selectedboxJ];
                        this.state.BoardState[this.selectedboxI][this.selectedboxJ]=0;
                        console.log(this.state.BoardState);
                        const aa=this.state.BoardState;
                        this.setState({
                            BoardState: aa,
                        });
                        
                        break;
                    }
                }
                this.selectedPiece=-1;
            }
        }
            /*  else {
                const aa = this.state.BoardState;
                console.log(aa);
                const aaa =aa[Math.floor(this.selected / size)][this.selected % size];
                this.state.BoardState[Math.floor(this.selected / size)][this.selected % size]
                aa[Math.floor(this.selected / size)][this.selected % size] = 0;
                aa[Math.floor(i)][j] = aaa;
                this.setState({
                    BoardState: aa,
                });
    
                this.selected = -1;
                console.log(this.selected);
            } */
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
