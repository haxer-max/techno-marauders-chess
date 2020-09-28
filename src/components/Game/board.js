import React from 'react';
import './../../App.css';
import Box from './Board/box.js'



 class Board extends React.Component{
    size=9
    state={
        //a:[1,2,3,4,5,6,7,8,9],
        a:[[1,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],
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
export default Board;