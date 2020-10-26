const wking= (i,j,piece,wall,green)=>{
    let ii=i+1;
    if(ii<10){
        if((piece[ii][j]>0&&piece[ii][j]<5) || piece[ii-1][j]>4 || wall[ii][j]===1 || wall[ii-1][j]===3){
            
        }
        else{
            green[ii][j]=1;
        }
    }
     ii=i-1;
    if(ii>-1){
        if((piece[ii][j]>0&&piece[ii][j]<5) || piece[ii+1][j]>4 || wall[ii][j]===3 || wall[ii+1][j]===1){
            
        }
        else{
            green[ii][j]=1;
        }
    }
     ii=j+1;
    if(ii<15){
        if((piece[i][ii]>0&&piece[i][ii]<5) || piece[i][ii-1]>4 || wall[i][ii]===2 || wall[i][ii-1]===4){
            
        }
        else{
            green[i][ii]=1;
        }
    }
     ii=j-1;
    if(ii>-1){
        if((piece[i][ii]>0&&piece[i][ii]<5) || piece[i][ii+1]>4 || wall[i][ii]===4 || wall[i][ii+1]===2){
            
        }
        else{
            green[i][ii]=1;
        }
    }
    if(1+i<10 && 1+j<15){//\,
        if((piece[i+1][j+1]>0&&piece[i+1][j+1]<5) || piece[i+1-1][j+1-1]>4 || 
            (wall[i+1][j+1]===1||wall[i+1-1][j+1]===3)&& (wall[i+1][j+1-1]===1||wall[i+1-1][j+1-1]===3) ||
            (wall[i+1][j+1]===1||wall[i+1-1][j+1]===3)&& (wall[i+1][j+1]===2||wall[i+1][j+1-1]===4) ||
            (wall[i+1][j+1-1]===1||wall[i+1-1][j+1-1]===3)&& (wall[i+1-1][j+1]===2||wall[i+1-1][j+1-1]===4) ||
            (wall[i+1][j+1]===2||wall[i+1][j+1-1]===4)&& (wall[i+1-1][j+1]===2||wall[i+1-1][j+1-1]===4) 
        ){}
        else{
            green[i+1][j+1]=1;
        }
    }
    if(-1+i>-1 && -1+j>-1 ){//'\
        if((piece[i-1][j-1]>0&&piece[i-1][j-1]<5) || piece[i-1+1][j-1+1]>4||
            (wall[i-1][j-1]===3||wall[i-1+1][j-1]===1)&& (wall[i-1][j-1+1]===3||wall[i-1+1][j-1+1]===1) ||
            (wall[i-1][j-1]===3||wall[i-1+1][j-1]===1)&& (wall[i-1][j-1]===4||wall[i-1][j-1+1]===2) ||
            (wall[i-1][j-1+1]===3||wall[i-1+1][j-1+1]===1)&& (wall[i-1+1][j-1]===4||wall[i-1+1][j-1+1]===2) ||
            (wall[i-1][j-1]===4||wall[i-1][j-1+1]===2)&& (wall[i-1+1][j-1]===4||wall[i-1+1][j-1+1]===2)        
        ){
            
        }
        else{
            green[i-1][j-1]=1;
        }
    }
    if(1+i<10 && 1+j>-1){//,/
        if((piece[i+1][j-1]>0&&piece[i+1][j-1]<5) || piece[i+1-1][j-1+1]>4||
            (wall[i+1][j-1]===1||wall[i+1-1][j-1]===3)&& (wall[i+1][j-1+1]===1||wall[i+1-1][j-1+1]===3) ||
            (wall[i+1][j-1]===1||wall[i+1-1][j-1]===3)&& (wall[i+1][j-1]===4||wall[i+1][j-1+1]===2) ||
            (wall[i+1][j-1+1]===1||wall[i+1-1][j-1+1]===3)&& (wall[i+1-1][j-1]===4||wall[i+1-1][j-1+1]===2) ||
            (wall[i+1][j-1]===4||wall[i+1][j-1+1]===2)&& (wall[i+1-1][j-1]===4||wall[i+1-1][j-1+1]===2)        
        ){
            
        }
        else{
            green[i+1][j-1]=1;
        }
    }
    if(-1+i>-1 && -1+j<15){///'
        if((piece[i-1][j+1]>0&&piece[i-1][j+1]<5) || piece[i-1+1][j+1-1]>4 ||
            (wall[i-1][j+1]===3||wall[i-1+1][j+1]===1)&& (wall[i-1][j+1-1]===3||wall[i-1+1][j+1-1]===1) ||
            (wall[i-1][j+1]===3||wall[i-1+1][j+1]===1)&& (wall[i-1][j+1]===2||wall[i-1][j+1-1]===4) ||
            (wall[i-1][j+1-1]===3||wall[i-1+1][j+1-1]===1)&& (wall[i-1+1][j+1]===2||wall[i-1+1][j+1-1]===4) ||
            (wall[i-1][j+1]===2||wall[i-1][j+1-1]===4)&& (wall[i-1+1][j+1]===2||wall[i-1+1][j+1-1]===4)         
        ){
            
        }
        else{
            green[i-1][j+1]=1;
        }
    }
}
const bking= (i,j,piece,wall,green)=>{
    let ii=i+1;
    if(ii<10){
        if((piece[ii-1][j]>0&&piece[ii-1][j]<5) || piece[ii][j]>4 || wall[ii][j]===1 || wall[ii-1][j]===3){
            
        }
        else{
            green[ii][j]=1;
        }
    }
     ii=i-1;
    if(ii>-1){
        if((piece[ii+1][j]>0&&piece[ii+1][j]<5) || piece[ii][j]>4 || wall[ii][j]===3 || wall[ii+1][j]===1){
            
        }
        else{
            green[ii][j]=1;
        }
    }
     ii=j+1;
    if(ii<15){
        if((piece[i][ii-1]>0&&piece[i][ii-1]<5) || piece[i][ii]>4 || wall[i][ii]===2 || wall[i][ii-1]===4){
            
        }
        else{
            green[i][ii]=1;
        }
    }
     ii=j-1;
    if(ii>-1){
        if((piece[i][ii+1]>0&&piece[i][ii+1]<5) || piece[i][ii]>4 || wall[i][ii]===4 || wall[i][ii+1]===2){
            
        }
        else{
            green[i][ii]=1;
        }
    }
    if(1+i<10 && 1+j<15){//\,
        if((piece[i+1-1][j+1-1]>0&&piece[i+1-1][j+1-1]<5) || piece[i+1][j+1]>4 || 
            (wall[i+1][j+1]===1||wall[i+1-1][j+1]===3)&& (wall[i+1][j+1-1]===1||wall[i+1-1][j+1-1]===3) ||
            (wall[i+1][j+1]===1||wall[i+1-1][j+1]===3)&& (wall[i+1][j+1]===2||wall[i+1][j+1-1]===4) ||
            (wall[i+1][j+1-1]===1||wall[i+1-1][j+1-1]===3)&& (wall[i+1-1][j+1]===2||wall[i+1-1][j+1-1]===4) ||
            (wall[i+1][j+1]===2||wall[i+1][j+1-1]===4)&& (wall[i+1-1][j+1]===2||wall[i+1-1][j+1-1]===4) 
        ){}
        else{
            green[i+1][j+1]=1;
        }
    }
    if(-1+i>-1 && -1+j>-1 ){//'\
        if((piece[i-1+1][j-1+1]>0&&piece[i-1+1][j-1+1]<5) || piece[i-1][j-1]>4||
            (wall[i-1][j-1]===3||wall[i-1+1][j-1]===1)&& (wall[i-1][j-1+1]===3||wall[i-1+1][j-1+1]===1) ||
            (wall[i-1][j-1]===3||wall[i-1+1][j-1]===1)&& (wall[i-1][j-1]===4||wall[i-1][j-1+1]===2) ||
            (wall[i-1][j-1+1]===3||wall[i-1+1][j-1+1]===1)&& (wall[i-1+1][j-1]===4||wall[i-1+1][j-1+1]===2) ||
            (wall[i-1][j-1]===4||wall[i-1][j-1+1]===2)&& (wall[i-1+1][j-1]===4||wall[i-1+1][j-1+1]===2)        
        ){
            
        }
        else{
            green[i-1][j-1]=1;
        }
    }
    if(1+i<10 && 1+j>-1){//,/
        if((piece[i+1-1][j-1+1]>0&&piece[i+1-1][j-1+1]<5) || piece[i+1][j-1]>4||
            (wall[i+1][j-1]===1||wall[i+1-1][j-1]===3)&& (wall[i+1][j-1+1]===1||wall[i+1-1][j-1+1]===3) ||
            (wall[i+1][j-1]===1||wall[i+1-1][j-1]===3)&& (wall[i+1][j-1]===4||wall[i+1][j-1+1]===2) ||
            (wall[i+1][j-1+1]===1||wall[i+1-1][j-1+1]===3)&& (wall[i+1-1][j-1]===4||wall[i+1-1][j-1+1]===2) ||
            (wall[i+1][j-1]===4||wall[i+1][j-1+1]===2)&& (wall[i+1-1][j-1]===4||wall[i+1-1][j-1+1]===2)        
        ){
            
        }
        else{
            green[i+1][j-1]=1;
        }
    }
    if(-1+i>-1 && -1+j<15){///'
        if((piece[i-1+1][j+1-1]>0&&piece[i-1+1][j+1-1]<5) || piece[i-1][j+1]>4 ||
            (wall[i-1][j+1]===3||wall[i-1+1][j+1]===1)&& (wall[i-1][j+1-1]===3||wall[i-1+1][j+1-1]===1) ||
            (wall[i-1][j+1]===3||wall[i-1+1][j+1]===1)&& (wall[i-1][j+1]===2||wall[i-1][j+1-1]===4) ||
            (wall[i-1][j+1-1]===3||wall[i-1+1][j+1-1]===1)&& (wall[i-1+1][j+1]===2||wall[i-1+1][j+1-1]===4) ||
            (wall[i-1][j+1]===2||wall[i-1][j+1-1]===4)&& (wall[i-1+1][j+1]===2||wall[i-1+1][j+1-1]===4)         
        ){
            
        }
        else{
            green[i-1][j+1]=1;
        }
    }
}

export {wking, bking};