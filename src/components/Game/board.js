import React, {useEffect, useState} from 'react';
import { Socket } from 'socket.io-client';
import './../../App.css';
import Box from './Board/box.js'


const Board=({BoardState,setBoardState,size,setFunc,emmitmoved})=>{
    

    
    function movepiece(i,j){
        if(i!==undefined&&j!==undefined){
        console.log("board state is "+ i + " "+j)
        console.log(BoardState)
        if(BoardState.selected_box===-1){
            if(BoardState.a[i][j]!==0){
                
                setBoardState({
                    a:BoardState.a,
                    selected_box:i*size+j,
                });
                
            }
        }
        else{
            const aa = BoardState.a;
            const aaa=aa[Math.floor(BoardState.selected_box/size)][BoardState.selected_box%size]
            aa[Math.floor(BoardState.selected_box/size)][BoardState.selected_box%size]=0;
            aa[Math.floor(i)][j]=aaa;
            setBoardState({
                a:aa,
                selected_box:-1
            });
        }
    }
 
    }
    setFunc((i,j)=>movepiece(i,j));

    
    function renbox(i,j){
       // console.log(i+ "h"+j)
        return (
            <Box 
                key={j+i*size}
                colour={j+i*size}
                v={BoardState.a[i][j]} 
                onClick={()=>{
                   emmitmoved(i,j)
                }}
            />
        );
    }
        //const ll=state.a.map((currentValue, index)=>renbox(index));
    let ll=[]
    for(var i=0;i<size;i++)
    {
        for(var j=0;j<size;j++)
        {
            ll.push(renbox(i,j))
        }
        ll.push(<span>&#010;</span>)
    }
    //console.log(ll)
    return( 
        <div>
            
            <h1>chess</h1>
            {ll}
        </div>
    );
        
    
}

/*
 class Board extends React.Component{
    /*constructor(props){
        super(props);
    }
    state={
        
        a:[[1,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,2,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],
        selected_box:-1,
    }
    movepiece=(i,j)=>{
        if(this.state.selected_box===-1)
        {
            if(this.state.a[i][j]!==0){
                this.setState({
                    selected_box:i*this.size+j,
                });
            }
        }
        else{
            const aa = this.state.a;
            const aaa=aa[Math.floor(this.state.selected_box/this.size)][this.state.selected_box%this.size]
            aa[Math.floor(this.state.selected_box/this.size)][this.state.selected_box%this.size]=0;
            aa[Math.floor(i)][j]=aaa;
            this.setState({
                a:aa,
                selected_box:-1
            });
        }
 
    }
    renbox(i,j){
        //console.log(i+ "h"+j)
        return (
            <Box 
                key={j+i*this.size}
                colour={j+i*this.size}
                v={this.state.a[i][j]} 
                onClick={()=>{this.movepiece(i,j)}}
            />
        );
    }

    render(){
        //const ll=this.state.a.map((currentValue, index)=>this.renbox(index));
        let ll=[]
        for(var i=0;i<this.size;i++)
        {
            for(var j=0;j<this.size;j++)
            {
                ll.push(this.renbox(i,j))
            }
            ll.push(<span>&#010;</span>)
        }
        //console.log(ll)
        return( 
            <div>
                
                <h1>chess</h1>
                {ll}
            </div>
        );
        
    }
}
*/
export default Board;