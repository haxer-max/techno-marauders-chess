import React, { Component } from "react";
//import "./Game.css";
import { Modal, Button, ModalBody } from "react-bootstrap";
import Clock from "./timer";
import "./ui.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import React from "react";
import "./../../App.css";
import Box from "./Board/box.js";
import io from "socket.io-client";
import piecelogic from "./Board/piecelogic";
import pieceRotation from "./Board/pieceRotation";
import wallRotation from "./Board/wallRotation";
import whitescore from "./Board/whitescore";
import blackscore from "./Board/blackscore";
import greenlogic from "./Board/greenlogic";
import { AboutModal } from "./AboutModal";
import { RulesModal } from "./RulesModal";
//import wallslogicc from "./Board/wallslogicc"
//import { render } from "@testing-library/react";

const serverURI = "http://localhost:4000";
const sizex = 15;
const sizey = 10;
const initgreen = [
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
];
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
            whiteTime: 60 * 20,
            blackTime: 60 * 20,
            gamestarted: 0,
            turn: -1,
            joined: 0,
            rot: -1,
            ended: 0,
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
        //this.isWhite=undefined;
        this.socket = io(serverURI);
        this.score1 = 0;
        this.score2 = 0;
        this.timeallocateblack = "timeallocate";
        this.timeallocatewhite = "timeallocate1";
        this.timeallocatetemp = "timeallocate1";

        this.movepiece = (i, j) => {
            if (this.state.ended === 1) return;
            if (this.state.gamestarted === 0) return;
            this.score1 = whitescore(this.state.BoardState);
            this.score2 = blackscore(this.state.BoardState);
            if (this.state.turn == !this.isWhite) return;
            if (this.selectedPiece === -1) {
                if (this.state.BoardState[i][j] !== 0) {
                    this.selectedboxI = i;
                    this.selectedboxJ = j;
                    if (this.state.BoardState[i][j] > 0) {
                        if (
                            (this.isWhite === 1 &&
                                this.state.BoardState[i][j] < 5) ||
                            (this.isWhite === 0 &&
                                this.state.BoardState[i][j] > 4)
                        ) {
                            this.selectedPiece = this.state.BoardState[i][j];
                            greenlogic(
                                i,
                                j,
                                this.state.BoardState,
                                this.state.walls,
                                this.state.green
                            );
                        }
                    }
                }
            } else {
                const boardtemp = this.state.BoardState.map(function (arr) {
                    return arr.slice();
                });

                if (this.state.green[i][j] === 1) {
                    if (
                        (this.isWhite === 1 && boardtemp[i][j] === 8) ||
                        (this.isWhite === 0 && boardtemp[i][j] === 4)
                    ) {
                        console.log("winwin");
                        this.socket.emit("win", this.isWhite);
                    }
                    boardtemp[i][j] = this.selectedPiece;
                    boardtemp[this.selectedboxI][this.selectedboxJ] = 0;
                    this.socket.emit("moved", boardtemp);
                }

                this.score1 = whitescore(this.state.BoardState);
                this.score2 = blackscore(this.state.BoardState);

                this.selectedPiece = -1;
                this.setState({
                    green: initgreen.map(function (arr) {
                        return arr.slice();
                    }),
                });
            }
        };
    }
    rotate(i, j) {
        if (this.state.ended === 1) return;
        if (this.state.gamestarted === 0) return;
        if (this.state.turn == !this.isWhite) return;
        const boardtemp = this.state.BoardState.map(function (arr) {
            return arr.slice();
        });
        const wallstemp = this.state.walls.map(function (arr) {
            return arr.slice();
        });
        wallRotation(wallstemp, i, j, this.isWhite);
        pieceRotation(boardtemp, i, j, this.isWhite);
        this.socket.emit("rotated", { board: boardtemp, wall: wallstemp });
    }

    componentDidMount() {
        console.log("hm " + this.props.location.state.roomid);
        this.join(
            this.props.location.state.roomid,
            this.props.location.state.name
        );
        this.socket.on("move", (boardtemp) => {
            this.setState(boardtemp);
        });
        this.socket.on("roomid", ({ roomid, isWhite, board, timeinterval }) => {
            alert("You joined room " + roomid);
            this.isWhite = isWhite;
            this.setState(board);
            this.setState({
                whiteTime: timeinterval.white,
                blackTime: timeinterval.black,
            });
            console.log(this.state);
            //this.state.whiteTime=timeinterval.white;
            //this.state.blackTime=timeinterval.black;
        });
        this.socket.on("connect", () => {
            alert("you are connected");
        });
        this.socket.on("disconnect", function () {
            alert(
                "you got disconneted, check internet connection and try to reload the page"
            );
            console.log("bye bye");
        });
        this.socket.on("time_left", (data) => {
            this.setState({
                timeLeft: data,
            });
        });
        this.socket.on("timer", (timeinterval) => {
            this.setState({
                whiteTime: timeinterval.white,
                blackTime: timeinterval.black,
            });
        });
        this.socket.on("start", (data) => {
            this.state.gamestarted = data;
            this.state.turn = 1;
            this.state.rot = 2;
        });
        this.socket.on("ended", (data) => {
            if (this.isWhite === data) alert("Congratulations, You won!!");
            else alert("you lost :( better luck next time");
            this.state.ended = 1;
            console.log(this.state);
            this.setState({
                ended: 1,
            });
        });
    }

    join(data, rollno) {
        console.log("joining");
        console.log(data);
        this.socket.emit("join", { data, rollno });
        this.state.joined = 1;
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
                    <p className="roomid">
                        Your Room ID is {this.props.location.state.roomid}
                    </p>
                    <h2 className="chess">Marauders chess</h2>
                    <nav>
                        <AboutModal />
                        <RulesModal />
                    </nav>
                    {(() => {
                        if (this.isWhite !== undefined) {
                            if (this.isWhite === 1)
                                return <h2 class="you">You are White</h2>;
                            else return <h2 class="you">You are Black</h2>;
                        }
                    })()}
                </div>
                <div className="boardclass">
                    <div style={{ display: "flex" }}>
                        <button
                            className="btn btn-info"
                            style={{    cursor:"pointer",
                                marginLeft:"126px",
                                marginRight:"120px",
                                marginBottom: "5px",
                                marginTop: "5px"}}
                            onClick={() => {
                                this.rotate(0, 0);
                            }}
                        >
                            {" "}
                            Rotate{" "}
                        </button>
                        <button
                            className="btn btn-info"
                            style={{    cursor:"pointer",
                                marginLeft:"126px",
                                marginRight:"120px",
                                marginBottom: "5px",
                                marginTop: "5px"}}
                            onClick={() => {
                                this.rotate(0, 5);
                            }}
                        >
                            {" "}
                            Rotate{" "}
                        </button>
                        <button
                            className="btn btn-info"
                            style={{    cursor:"pointer",
                                marginLeft:"126px",
                                marginRight:"120px",
                                marginBottom: "5px",
                                marginTop: "5px"}}
                            onClick={() => {
                                this.rotate(0, 10);
                            }}
                        >
                            {" "}
                            Rotate{" "}
                        </button>
                    </div>
                    <div>{ll}</div>
                    <div style={{ display: "flex" }}>
                        <button
                            className="btn btn-info"
                            style={{    cursor:"pointer",
                                marginLeft:"126px",
                                marginRight:"120px",
                                marginBottom: "5px",
                                marginTop: "5px"}}
                            onClick={() => {
                                this.rotate(5, 0);
                            }}
                        >
                            {" "}
                            Rotate{" "}
                        </button>
                        <button
                            className="btn btn-info"
                            style={{    cursor:"pointer",
                                marginLeft:"126px",
                                marginRight:"120px",
                                marginBottom: "5px",
                                marginTop: "5px"}}
                            onClick={() => {
                                this.rotate(5, 5);
                            }}
                        >
                            {" "}
                            Rotate{" "}
                        </button>
                        <button
                            className="btn btn-info"
                            style={{    cursor:"pointer",
                                marginLeft:"126px",
                                marginRight:"120px",
                                marginBottom: "5px",
                                marginTop: "5px"}}
                            onClick={() => {
                                this.rotate(5, 10);
                            }}
                        >
                            {" "}
                            Rotate{" "}
                        </button>
                    </div>
                </div>

                <div className="timer">
                    {(() => {
                        if (!this.state.gamestarted && this.state.joined) {
                            return (
                                <button
                                    className="btn btn-success"
                                    //className="ready"
                                    onClick={() => {
                                        this.socket.emit("ready", 1);
                                    }}
                                >
                                    Ready
                                </button>
                            );
                        }
                    })()}
                    {(() => {
                        if (this.state.ended === 0) {
                            console.log("clear this");
                            return (
                                <button
                                    className="btn btn-danger"
                                    //{//className="stop"}
                                    onClick={() => {
                                        if (
                                            window.confirm(
                                                "Are you sure you want to give up?"
                                            )
                                        ) {
                                            this.socket.emit(
                                                "win",
                                                this.isWhite ? 0 : 1
                                            );
                                        }
                                    }}
                                >
                                    I wanna give up
                                </button>
                            );
                        }
                    })()}
                    {/*{(() => {
                        if (this.state.ended === 0 && this.state.turn === 1) {
                            console.log("clear this");
                            return (
                                <p className="timeallocate1">
                                    White is left with{" "}
                                    <p className="timeremain">
                                        {Math.floor(this.state.whiteTime / 60)}
                                        min {this.state.whiteTime % 60}sec
                                    </p>
                                </p>
                            );
                        } else {
                            return (
                                <p className="timeallocate">
                                    White is left with{" "}
                                    <p className="timeremain">
                                        {Math.floor(this.state.whiteTime / 60)}
                                        min {this.state.whiteTime % 60}sec
                                    </p>
                                </p>
                            );
                        }
                    })()}
                    {(() => {
                        if (this.state.ended === 0 && this.state.turn === 0) {
                            console.log("clear this");
                            return (
                                <p className="timeallocate1">
                                    Black is left with{" "}
                                    <p className="timeremain">
                                        {Math.floor(this.state.blackTime / 60)}
                                        min {this.state.blackTime % 60}sec
                                    </p>
                                </p>
                            );
                        } else {
                            return (
                                <p className="timeallocate">
                                    Black is left with{" "}
                                    <p className="timeremain">
                                        {Math.floor(this.state.blackTime / 60)}
                                        min {this.state.blackTime % 60}sec
                                    </p>
                                </p>
                            );
                        }
                    })()}
                </div>*/}

                <div
                    class={
                        "rounded text-white shadow mt-2 p-3 pl-6 pr-6 text-center mb-2 " +
                        (this.isWhite === 1
                            ? this.state.turn === 1
                                ? "bg-green"
                                : "bg-red"
                            : "bg-opponent")
                    }
                >
                    <p class="mb-2 font-weight-bold text-uppercase">
                        {this.isWhite === 1
                            ? this.state.turn === 1
                                ? "Play Your Turn"
                                : "Wait for your Turn"
                            : this.state.turn === 1
                            ? "Opponent is Playing"
                            : "Opponent is Waiting"}
                    </p>
                    <div
                        id="clock-b"
                        class="countdown-circles d-flex flex-wrap justify-content-center pt-4"
                    >
                        <Clock
                            time={this.state.whiteTime}
                        />
                    </div>
                </div>
                <div
                    class={
                        "rounded text-white shadow mt-2 p-3 pl-6 pr-6 text-center mb-2 " +
                        (this.isWhite === 0
                            ? this.state.turn === 0
                                ? "bg-green"
                                : "bg-red"
                            : "bg-opponent")
                    }
                >
                    <p class="mb-2 font-weight-bold text-uppercase">
                        {this.isWhite === 0
                            ? this.state.turn === 0
                                ? "Play Your Turn"
                                : "Wait for your Turn"
                            : this.state.turn === 0
                            ? "Opponent is Playing"
                            : "Opponent is Waiting"}
                    </p>
                    <div
                        id="clock-b"
                        class="countdown-circles d-flex flex-wrap justify-content-center pt-4"
                    >
                        <Clock
                            time={this.state.blackTime}
                        />
                    </div>
                </div>
                </div>

                <div className="footer1">
                    Copyright &copy; 2019-2020{" "}
                    <a
                        href="https://technothlon.techniche.org.in/"
                        target="_blank"
                    >
                        Technotholon
                    </a>
                    . All right Reserved
                </div>
            </div>
        );
    }
}

export default Game;
