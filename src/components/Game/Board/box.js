import React, {useState} from 'react';
import './../../../App.css';
function Box (props){
    let background=()=>{
        if(props.colour%2===1) return "burlywood";
        else return "rgb(100, 60, 7)";
    }
    let border=()=>{
        console.log(props.w)
        switch(props.w){
            case 1: return "inset 0px 8px 0px 0px black";
            case 2: return "inset 8px 0px 0px 0px black";
            case 3: return "inset 0px -8px 0px 0px black";
            case 4: return "inset -8px 0px 0px 0px black";
            default: return "inset 0px 0px 0px 0px black";
        }
    }
   // /*
    if(props.v!==0){
        return (
            <div className='box' style={{backgroundColor:background(), boxShadow:border(), }} onClick={props.onClick}>         
                {props.v}
            </div>     
        );
    }
    else{
        return (
            <div className='box' style={{backgroundColor:background(), boxShadow:border(),}} onClick={props.onClick}></div>
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