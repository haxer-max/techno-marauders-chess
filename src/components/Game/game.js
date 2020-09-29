import React, {useState} from "react";
import "./../../App.css";
import Board from "./board.js";

function Game() {
    const BoardSize = 9;
    const [BoardState, setBoardState] = useState({
        a: [
            [1, 0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        selected_box: -1,
    });

    return (
        <div>
            <Board size={BoardSize} BoardState={BoardState} setBoardState={setBoardState} />
        </div>
    );
}

export default Game;
