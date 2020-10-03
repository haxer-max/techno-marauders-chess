import React, { useState, useEffect } from "react";
import "./../../App.css";
import Box from "./Board/box.js";
import io from "socket.io-client";
import { render } from "@testing-library/react";
const serverURI = "http://localhost:4000";
const size = 9;
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            BoardState: [
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
    }

    componentDidMount() {
        this.join(this.props.location.state.roomid);
        this.socket.on("move", ({ i, j }) => {
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
                const aaa =aa[Math.floor(this.selected / size)][this.selected % size];
                aa[Math.floor(this.selected / size)][this.selected % size] = 0;
                aa[Math.floor(i)][j] = aaa;
                this.setState({
                    BoardState: aa,
                });

                this.selected = -1;
                console.log(this.selected);
            }
        });
    }
    emmitmoved(i, j) {
        this.socket.emit("moved", { i, j });
    }
    join(roomid) {
        console.log("joining");
        this.socket.emit("join", roomid);
    }

    movepiece(i, j) {
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
    }
    //setFunc((i,j)=>movepiece(i,j));

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



/*
    const a=(data)=>{
        setSelected(data)
    }
    const b=(data)=>{
        setBoardState(data);
    }
    function movepiece(i,j){
    
        console.log("board state is "+ i + " "+j)
        console.log(selected);
        //console.log(BoardState)
        if(selected===-1){
            if(BoardState[i][j]!==0){
                console.log(i*size+j );
                a(i*size+j)
                //selected=i*size+j;
                setSelected(i*size+j);
                console.log(selected)
            }
        }
        else{            
            const aa = BoardState;
            const aaa=aa[Math.floor(selected/size)][selected%size]
            aa[Math.floor(selected/size)][selected%size]=0;
            aa[Math.floor(i)][j]=aaa;
            setBoardState(aa);
            setSelected(-1);
            console.log(selected)
        }
    }
    function renbox(i,j){
       // console.log(i+ "h"+j)
        return (
            <Box 
                key={j+i*size}
                colour={j+i*size}
                v={BoardState[i][j]} 
                w={walls[i][j]}
                onClick={()=>{movepiece(i,j)}}
            />
        );
    }
    let ll=[]
    for(var i=0;i<size;i++)
    {
        for(var j=0;j<size;j++)
        {
            //console.log('a')
            ll.push(renbox(i,j))
        }
        ll.push(<span key={-i-1}>&#010;</span>)
    }


    return (
        <div>
            <p>{location.state.roomid}</p>
            <div>
                
                <h1>chess</h1>
                {ll}
            </div>

        </div>
    );
}
*/

/*
let socket

function Game({ location }) {
    const size = 9;
    const [BoardState, setBoardState] = useState([
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
        ]);
    const [walls,setWalls]= useState([
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 3, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0, 2, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ])
   //let selected=-1;
        let [selected,setSelected]=useState(-1);
   // const [func,setFunc]=useState((i,j)=>{console.log("default")});
    /*useEffect(() => {
        console.log(location.state)
        socket = io("http://localhost:4000");
        join(location.state.roomid)
        socket.on("connect", () => {
            console.log("connected");
        });
        socket.on('move',({i,j})=>{
            console.log("board state is "+ i + " "+j)
            console.log(selected);
            //console.log(BoardState)
            if(selected===-1){
                if(BoardState[i][j]!==0){
                    console.log(i*size+j );
                    selected=i*size+j;
                    //setSelected(i*size+j);
                    //setSelected((selected) => [...selected, 1]);
                    console.log(selected)
                }
            }
            else{      
                const aa = BoardState;
                const aaa=aa[Math.floor(selected/size)][selected%size]
                aa[Math.floor(selected/size)][selected%size]=0;
                aa[Math.floor(i)][j]=aaa;
                console.log(BoardState)
                b(aa);
                console.log(BoardState)
                a(-1);
                // selected=-1;
                console.log(selected)
            }
        })

        return () => {
            socket.disconnect();
        };
    }, []);

    function emmitmoved(i,j){
        socket.emit('moved',{i,j})
    }
    function join(roomid) {
        console.log("joining");
        socket.emit("join", roomid );
    }
*/ export default Game;
