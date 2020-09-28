import React, {useState} from 'react';
import './../../../App.css';
function Box (props){
    let [count, setcount]=useState(1);

    let background=()=>{
        console.log(props.colour)
        if(props.colour%2===1) return "burlywood";
        else return "rgb(100, 60, 7)";
    }
    if(props.v!==0){
        return (
            <div className='box' style={{backgroundColor:background()}} onClick={props.onClick}>         
                {props.v}
            </div>     
        );
    }
    else{
        return (
            <div className='box' style={{backgroundColor:background()}} onClick={props.onClick}></div>
        );
    }
}

export default Box