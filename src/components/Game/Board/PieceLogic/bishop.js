const wbishop= (i,j,piece,wall,green)=>{
    for(let ii=1; ii+i<10 && ii+j<15 ;ii++){//\,
        if((piece[i+ii][j+ii]>0&&piece[i+ii][j+ii]<5) || piece[i+ii-1][j+ii-1]>4 || 
            (wall[i+ii][j+ii]===1||wall[i+ii-1][j+ii]===3)&& (wall[i+ii][j+ii-1]===1||wall[i+ii-1][j+ii-1]===3) ||
            (wall[i+ii][j+ii]===1||wall[i+ii-1][j+ii]===3)&& (wall[i+ii][j+ii]===2||wall[i+ii][j+ii-1]===4) ||
            (wall[i+ii][j+ii-1]===1||wall[i+ii-1][j+ii-1]===3)&& (wall[i+ii-1][j+ii]===2||wall[i+ii-1][j+ii-1]===4) ||
            (wall[i+ii][j+ii]===2||wall[i+ii][j+ii-1]===4)&& (wall[i+ii-1][j+ii]===2||wall[i+ii-1][j+ii-1]===4) 
        ){
            break;
        }
        else{
            green[i+ii][j+ii]=1;
        }
    }
    for(let ii=-1; ii+i>-1 && ii+j>-1 ;ii--){//'\
        if((piece[i+ii][j+ii]>0&&piece[i+ii][j+ii]<5) || piece[i+ii+1][j+ii+1]>4||
            (wall[i+ii][j+ii]===3||wall[i+ii+1][j+ii]===1)&& (wall[i+ii][j+ii+1]===3||wall[i+ii+1][j+ii+1]===1) ||
            (wall[i+ii][j+ii]===3||wall[i+ii+1][j+ii]===1)&& (wall[i+ii][j+ii]===4||wall[i+ii][j+ii+1]===2) ||
            (wall[i+ii][j+ii+1]===3||wall[i+ii+1][j+ii+1]===1)&& (wall[i+ii+1][j+ii]===4||wall[i+ii+1][j+ii+1]===2) ||
            (wall[i+ii][j+ii]===4||wall[i+ii][j+ii+1]===2)&& (wall[i+ii+1][j+ii]===4||wall[i+ii+1][j+ii+1]===2)        
        ){
            break;
        }
        else{
            green[i+ii][j+ii]=1;
        }
    }
    for(let ii=1; ii+i<10 && ii+j>-1 ;ii++){//,/
        if((piece[i+ii][j-ii]>0&&piece[i+ii][j-ii]<5) || piece[i+ii-1][j-ii+1]>4||
            (wall[i+ii][j-ii]===1||wall[i+ii-1][j-ii]===3)&& (wall[i+ii][j-ii+1]===1||wall[i+ii-1][j-ii+1]===3) ||
            (wall[i+ii][j-ii]===1||wall[i+ii-1][j-ii]===3)&& (wall[i+ii][j-ii]===4||wall[i+ii][j-ii+1]===2) ||
            (wall[i+ii][j-ii+1]===1||wall[i+ii-1][j-ii+1]===3)&& (wall[i+ii-1][j-ii]===4||wall[i+ii-1][j-ii+1]===2) ||
            (wall[i+ii][j-ii]===4||wall[i+ii][j-ii+1]===2)&& (wall[i+ii-1][j-ii]===4||wall[i+ii-1][j-ii+1]===2)        
        ){
            break;
        }
        else{
            green[i+ii][j-ii]=1;
        }
    }
    for(let ii=-1; ii+i>-1 && ii+j<15 ;ii--){///'
        if((piece[i+ii][j-ii]>0&&piece[i+ii][j-ii]<5) || piece[i+ii+1][j-ii-1]>4 ||
            (wall[i+ii][j-ii]===3||wall[i+ii+1][j-ii]===1)&& (wall[i+ii][j-ii-1]===3||wall[i+ii+1][j-ii-1]===1) ||
            (wall[i+ii][j-ii]===3||wall[i+ii+1][j-ii]===1)&& (wall[i+ii][j-ii]===2||wall[i+ii][j-ii-1]===4) ||
            (wall[i+ii][j-ii-1]===3||wall[i+ii+1][j-ii-1]===1)&& (wall[i+ii+1][j-ii]===2||wall[i+ii+1][j-ii-1]===4) ||
            (wall[i+ii][j-ii]===2||wall[i+ii][j-ii-1]===4)&& (wall[i+ii+1][j-ii]===2||wall[i+ii+1][j-ii-1]===4)         
        ){
            break;
        }
        else{
            green[i+ii][j-ii]=1;
        }
    }
}

const bbishop= (i,j,piece,wall,green)=>{
    for(let ii=1; ii+i<10 && ii+j<15 ;ii++){//\,
        if((piece[i+ii-1][j+ii-1]>0&&piece[i+ii-1][j+ii-1]<5) || piece[i+ii][j+ii]>4 || 
            (wall[i+ii][j+ii]===1||wall[i+ii-1][j+ii]===3)&& (wall[i+ii][j+ii-1]===1||wall[i+ii-1][j+ii-1]===3) ||
            (wall[i+ii][j+ii]===1||wall[i+ii-1][j+ii]===3)&& (wall[i+ii][j+ii]===2||wall[i+ii][j+ii-1]===4) ||
            (wall[i+ii][j+ii-1]===1||wall[i+ii-1][j+ii-1]===3)&& (wall[i+ii-1][j+ii]===2||wall[i+ii-1][j+ii-1]===4) ||
            (wall[i+ii][j+ii]===2||wall[i+ii][j+ii-1]===4)&& (wall[i+ii-1][j+ii]===2||wall[i+ii-1][j+ii-1]===4) 
        ){
            break;
        }
        else{
            green[i+ii][j+ii]=1;
        }
    }
    for(let ii=-1; ii+i>-1 && ii+j>-1 ;ii--){//'\
        if((piece[i+ii+1][j+ii+1]>0&&piece[i+ii+1][j+ii+1]<5) || piece[i+ii][j+ii]>4||
            (wall[i+ii][j+ii]===3||wall[i+ii+1][j+ii]===1)&& (wall[i+ii][j+ii+1]===3||wall[i+ii+1][j+ii+1]===1) ||
            (wall[i+ii][j+ii]===3||wall[i+ii+1][j+ii]===1)&& (wall[i+ii][j+ii]===4||wall[i+ii][j+ii+1]===2) ||
            (wall[i+ii][j+ii+1]===3||wall[i+ii+1][j+ii+1]===1)&& (wall[i+ii+1][j+ii]===4||wall[i+ii+1][j+ii+1]===2) ||
            (wall[i+ii][j+ii]===4||wall[i+ii][j+ii+1]===2)&& (wall[i+ii+1][j+ii]===4||wall[i+ii+1][j+ii+1]===2)        
        ){
            break;
        }
        else{
            green[i+ii][j+ii]=1;
        }
    }
    for(let ii=1; ii+i<10 && ii+j>-1 ;ii++){//,/
        if((piece[i+ii-1][j-ii+1]>0&&piece[i+ii-1][j-ii+1]<5) || piece[i+ii][j-ii]>4||
            (wall[i+ii][j-ii]===1||wall[i+ii-1][j-ii]===3)&& (wall[i+ii][j-ii+1]===1||wall[i+ii-1][j-ii+1]===3) ||
            (wall[i+ii][j-ii]===1||wall[i+ii-1][j-ii]===3)&& (wall[i+ii][j-ii]===4||wall[i+ii][j-ii+1]===2) ||
            (wall[i+ii][j-ii+1]===1||wall[i+ii-1][j-ii+1]===3)&& (wall[i+ii-1][j-ii]===4||wall[i+ii-1][j-ii+1]===2) ||
            (wall[i+ii][j-ii]===4||wall[i+ii][j-ii+1]===2)&& (wall[i+ii-1][j-ii]===4||wall[i+ii-1][j-ii+1]===2)        
        ){
            break;
        }
        else{
            green[i+ii][j-ii]=1;
        }
    }
    for(let ii=-1; ii+i>-1 && ii+j<15 ;ii--){///'
        if((piece[i+ii+1][j-ii-1]>0&&piece[i+ii+1][j-ii-1]<5) || piece[i+ii][j-ii]>4 ||
            (wall[i+ii][j-ii]===3||wall[i+ii+1][j-ii]===1)&& (wall[i+ii][j-ii-1]===3||wall[i+ii+1][j-ii-1]===1) ||
            (wall[i+ii][j-ii]===3||wall[i+ii+1][j-ii]===1)&& (wall[i+ii][j-ii]===2||wall[i+ii][j-ii-1]===4) ||
            (wall[i+ii][j-ii-1]===3||wall[i+ii+1][j-ii-1]===1)&& (wall[i+ii+1][j-ii]===2||wall[i+ii+1][j-ii-1]===4) ||
            (wall[i+ii][j-ii]===2||wall[i+ii][j-ii-1]===4)&& (wall[i+ii+1][j-ii]===2||wall[i+ii+1][j-ii-1]===4)         
        ){
            break;
        }
        else{
            green[i+ii][j-ii]=1;
        }
    }
}

export {wbishop,bbishop};