export default function blackscore(boardstate){
    var scoreofblack=0;
    for (var i=0;i<10;i++){
        for (var j=0;j<15;j++){
            if(boardstate[i][j]===5){
                scoreofblack+=1;
            }
            else if(boardstate[i][j]==6){
                scoreofblack+=2;
            }
            else if(boardstate[i][j]==7){
                scoreofblack+=3;
            }
            else if(boardstate[i][j]==8){
                scoreofblack+=4;
            }
        }
    }
    return scoreofblack-11;
}