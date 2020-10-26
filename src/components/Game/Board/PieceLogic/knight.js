const wknight= (i,j,piece,wall,green)=>{
    
    if(i+2<10 && j+1<15 && (piece[i+2][j+1]===0 || piece[i+2][j+1]>4)  && ((wall[i][j]===3) + (wall[i+1][j]%2) + (wall[i+2][j]===1) +(wall[i+2][j]===4)+ (wall[i+2][j+1]===2))<2){
        green[i+2][j+1]=1;
    }
    if(i+2<10 && j-1>-1 && (piece[i+2][j-1]===0 || piece[i+2][j-1]>4)  && ((wall[i][j]===3) + (wall[i+1][j]%2) + (wall[i+2][j]===1) +(wall[i+2][j]===2)+ (wall[i+2][j-1]===4))<2){
        green[i+2][j-1]=1;
    }
    if(i-2>-1 && j+1<15 && (piece[i-2][j+1]===0 || piece[i-2][j+1]>4)  && ((wall[i][j]===1) + (wall[i-1][j]%2) + (wall[i-2][j]===3) +(wall[i-2][j]===4)+ (wall[i-2][j+1]===2))<2){
        green[i-2][j+1]=1;
    }
    if(i-2>-1 && j-1>-1 && (piece[i-2][j-1]===0 || piece[i-2][j-1]>4)  && ((wall[i][j]===1) + (wall[i-1][j]%2) + (wall[i-2][j]===3) +(wall[i-2][j]===2)+ (wall[i-2][j-1]===4))<2){
        green[i-2][j-1]=1;
    }

    if(i+1<10 && j+2<15 && (piece[i+1][j+2]===0 || piece[i+1][j+2]>4)  &&   ((wall[i][j]===4) + (wall[i][j+1]%2===0 && wall[i][j+1]!==0) + (wall[i][j+2]===2) +(wall[i][j+2]===3)+ (wall[i+1][j+2]===1))<2){
        green[i+1][j+2]=1;
    }
    if(i-1>-1 && j+2<15  && (piece[i-1][j+2]===0 || piece[i-1][j+2]>4)  &&  ((wall[i][j]===4) + (wall[i][j+1]%2===0 && wall[i][j+1]!==0) + (wall[i][j+2]===2) +(wall[i][j+2]===1)+ (wall[i-1][j+2]===3))<2){
        green[i-1][j+2]=1;
    }
    if(i+1<10 && j-2>-1  && (piece[i+1][j-2]===0 || piece[i+1][j-2]>4)  &&  ((wall[i][j]===2) + (wall[i][j-1]%2===0 && wall[i][j-1]!==0) + (wall[i][j-2]===4) +(wall[i][j-2]===3)+ (wall[i+1][j-2]===1))<2){
        green[i+1][j-2]=1;
    }
    if(i-1>-1 && j-2>-1   && (piece[i-1][j-2]===0 || piece[i-1][j-2]>4)  && ((wall[i][j]===2) + (wall[i][j-1]%2===0 && wall[i][j-1]!==0) + (wall[i][j-2]===4) +(wall[i][j-2]===1)+ (wall[i-1][j-2]===3))<2){
        green[i-1][j-2]=1;
    }

}
const bknight= (i,j,piece,wall,green)=>{
    
    if(i+2<10 && j+1<15 && piece[i+2][j+1]<5  && ((wall[i][j]===3) + (wall[i+1][j]%2) + (wall[i+2][j]===1) +(wall[i+2][j]===4)+ (wall[i+2][j+1]===2))<2){
        green[i+2][j+1]=1;
    }
    if(i+2<10 && j-1>-1 && piece[i+2][j-1]<5  && ((wall[i][j]===3) + (wall[i+1][j]%2) + (wall[i+2][j]===1) +(wall[i+2][j]===2)+ (wall[i+2][j-1]===4))<2){
        green[i+2][j-1]=1;
    }
    if(i-2>-1 && j+1<15 && piece[i-2][j+1]<5  && ((wall[i][j]===1) + (wall[i-1][j]%2) + (wall[i-2][j]===3) +(wall[i-2][j]===4)+ (wall[i-2][j+1]===2))<2){
        green[i-2][j+1]=1;
    }
    if(i-2>-1 && j-1>-1 && piece[i-2][j-1]<5  && ((wall[i][j]===1) + (wall[i-1][j]%2) + (wall[i-2][j]===3) +(wall[i-2][j]===2)+ (wall[i-2][j-1]===4))<2){
        green[i-2][j-1]=1;
    }

    if(i+1<10 && j+2<15 && piece[i+1][j+2]<5  && ((wall[i][j]===4) + (wall[i][j+1]%2===0 && wall[i][j+1]!==0) + (wall[i][j+2]===2) +(wall[i][j+2]===3)+ (wall[i+1][j+2]===1))<2){
        green[i+1][j+2]=1;
    }
    if(i-1>-1 && j+2<15  && piece[i-1][j+2]<5  && ((wall[i][j]===4) + (wall[i][j+1]%2===0 && wall[i][j+1]!==0) + (wall[i][j+2]===2) +(wall[i][j+2]===1)+ (wall[i-1][j+2]===3))<2){
        green[i-1][j+2]=1;
    }
    if(i+1<10 && j-2>-1  && piece[i+1][j-2]<5  && ((wall[i][j]===2) + (wall[i][j-1]%2===0 && wall[i][j-1]!==0) + (wall[i][j-2]===4) +(wall[i][j-2]===3)+ (wall[i+1][j-2]===1))<2){
        green[i+1][j-2]=1;
    }
    if(i-1>-1 && j-2>-1   && piece[i-1][j-2]<5  && ((wall[i][j]===2) + (wall[i][j-1]%2===0 && wall[i][j-1]!==0) + (wall[i][j-2]===4) +(wall[i][j-2]===1)+ (wall[i-1][j-2]===3))<2){
        green[i-1][j-2]=1;
    }

}

export  {wknight , bknight};