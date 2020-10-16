import React from "react";
import "./../../../App.css";

const img_dict = {
    4: "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg",
    2: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg",
    1: "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg",
    3: "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg",
    8: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg",
    6: "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg",
    5: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg",
    7: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg",
};

export default function Box(props) {
    let background = () => {
        let j=Math.floor(props.colour/15);
        let i= props.colour%15;
        if(((i<5||i>9)&& j<5) || ((i>4 && i<10)&&j>4))
        {
            if (props.colour % 2 === 1) return "burlywood";
            else return "rgb(131, 85, 29)";
        } else{
            if (props.colour % 2 === 1) return "rgb(235, 206, 170)";
            else return "rgb(102, 60, 9)";
            //
        }
    };
    let border = () => {
        //console.log(props.w);
        switch (props.w) {
            case 1:
                return "inset 0px 8px 0px 0px black";
            case 2:
                return "inset 8px 0px 0px 0px black";
            case 3:
                return "inset 0px -8px 0px 0px black";
            case 4:
                return "inset -8px 0px 0px 0px black";
            default:
                return "inset 0px 0px 0px 0px black";
        }
    };

    if (props.v !== 0) {
        return (
            <div
                className="box"
                style={{ backgroundColor: background(), boxShadow: border() }}
                onClick={props.onClick}
            >
                <img src={img_dict[props.v]} />
            </div>
        );
    } else {
        return (
            <div
                className="box"
                style={{ backgroundColor: background(), boxShadow: border() }}
                onClick={props.onClick}
            ></div>
        );
    }
};


