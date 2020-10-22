export default function whitescore(boardstate){
    var scoreofwhite=0;
    for (var i=0;i<10;i++){
        for (var j=0;j<15;j++){
            if(boardstate[i][j]===1){
                scoreofwhite+=40;
            }
            else if(boardstate[i][j]==2){
                scoreofwhite+=35;
            }
            else if(boardstate[i][j]==3){
                scoreofwhite+=35;
            }
            else if(boardstate[i][j]==4){
                scoreofwhite+=70;
            }
        }
    }
    return scoreofwhite-255;
}