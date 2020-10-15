export default function whitescore(boardstate){
    var scoreofwhite=0;
    for (var i=0;i<10;i++){
        for (var j=0;j<15;j++){
            if(boardstate[i][j]===1){
                scoreofwhite+=1;
            }
            else if(boardstate[i][j]==2){
                scoreofwhite+=2;
            }
            else if(boardstate[i][j]==3){
                scoreofwhite+=3;
            }
            else if(boardstate[i][j]==4){
                scoreofwhite+=4;
            }
        }
    }
    return scoreofwhite-11;
}