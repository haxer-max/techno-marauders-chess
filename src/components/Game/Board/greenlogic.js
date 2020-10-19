export default function greenlogic(i,j,piece,wall,green){
    console.log("greeeeeeeeeeeeen")
    switch(piece[i][j]){
        //case 1: wknight(i,j,piece,wall,green); break;
        //case 2: wbishop(i,j,piece,wall,green); break;
        case 3: wrook(i,j,piece,wall,green); break;
        //case 4: wking(i,j,piece,wall,green); break;
        //case 5: bknight(i,j,piece,wall,green); break;
        //case 6: bbishop(i,j,piece,wall,green); break;
        case 7: brook(i,j,piece,wall,green); break;
        //case 8: bking(i,j,piece,wall,green); break;
    }

}
//  __
// 1     2|a     3__   4 a|
// a  
// b
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








