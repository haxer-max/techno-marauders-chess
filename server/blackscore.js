module.exports= function blackscore(boardstate){
    var scoreofwhite=0;
    for (var i=0;i<10;i++){
        for (var j=0;j<15;j++){
            if(boardstate[i][j]===1){
                scoreofwhite+=50;
            }
            else if(boardstate[i][j]==2){
                scoreofwhite+=35;
            }
            else if(boardstate[i][j]==3){
                scoreofwhite+=35;
            }
        }
    }
    return -scoreofwhite+205;
};