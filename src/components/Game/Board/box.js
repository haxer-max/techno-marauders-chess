import React, {useState} from 'react';
import './../../../App.css';
function Box (props){
    let background=()=>{
        if(props.colour%2===1) return "burlywood";
        else return "rgb(100, 60, 7)";
    }
   // /*
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
    }/*
    if(props.v!==0){
        return (
            <form onSubmit={(e)=>{
                e.preventDefault();
                props.onClick()}}>
            <button className='box' style={{backgroundColor:background()}} >         
                {props.v}
            </button>
            </form>    
        );
    }
    else{
        return (
            <form onSubmit={(e)=>{
                e.preventDefault();
                props.onClick()}}>
            <button className='box' style={{backgroundColor:background()}} >         

            </button>
            </form> 
        );
    }*/

}

export default Box