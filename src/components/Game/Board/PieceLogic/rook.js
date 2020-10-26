const wrook= (i,j,piece,wall,green)=>{
    for(let ii=i+1; ii<10;ii++){
        if((piece[ii][j]>0&&piece[ii][j]<5) || piece[ii-1][j]>4 || wall[ii][j]===1 || wall[ii-1][j]===3){
            break;
        }
        else{
            green[ii][j]=1;
        }
    }
    for(let ii=i-1; ii>-1;ii--){
        if((piece[ii][j]>0&&piece[ii][j]<5) || piece[ii+1][j]>4 || wall[ii][j]===3 || wall[ii+1][j]===1){
            break;
        }
        else{
            green[ii][j]=1;
        }
    }
    for(let ii=j+1; ii<15;ii++){
        if((piece[i][ii]>0&&piece[i][ii]<5) || piece[i][ii-1]>4 || wall[i][ii]===2 || wall[i][ii-1]===4){
            break;
        }
        else{
            green[i][ii]=1;
        }
    }
    for(let ii=j-1; ii>-1;ii--){
        if((piece[i][ii]>0&&piece[i][ii]<5) || piece[i][ii+1]>4 || wall[i][ii]===4 || wall[i][ii+1]===2){
            break;
        }
        else{
            green[i][ii]=1;
        }
    }
}
const brook= (i,j,piece,wall,green)=>{
    for(let ii=i+1; ii<10;ii++){
        if(piece[ii][j]>4 || (piece[ii-1][j]<5 && piece[ii-1][j]>0) || wall[ii][j]===1 || wall[ii-1][j]===3){
            break;
        }
        else{
            green[ii][j]=1;
        }
    }
    for(let ii=i-1; ii>-1;ii--){
        if(piece[ii][j]>4 || (piece[ii+1][j]<5 && piece[ii+1][j]>0) || wall[ii][j]===3 || wall[ii+1][j]===1){
            break;
        }
        else{
            green[ii][j]=1;
        }
    }
    for(let ii=j+1; ii<15;ii++){
        if(piece[i][ii]>4 || (piece[i][ii-1]<5 && piece[i][ii-1]>0) || wall[i][ii]===2 || wall[i][ii-1]===4){
            break;
        }
        else{
            green[i][ii]=1;
        }
    }
    for(let ii=j-1; ii>-1;ii--){
        if(piece[i][ii]>4 || (piece[i][ii+1]<5 && piece[i][ii+1]>0) || wall[i][ii]===4 || wall[i][ii+1]===2){
            break;
        }
        else{
            green[i][ii]=1;
        }
    }
}
export {wrook,brook};