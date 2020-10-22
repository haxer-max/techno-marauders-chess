module.exports=  function whitescore(boardstate){
    var scoreofblack=0;
    for (var i=0;i<10;i++){
        for (var j=0;j<15;j++){
            if(boardstate[i][j]===5){
                scoreofblack+=40;
            }
            else if(boardstate[i][j]==6){
                scoreofblack+=35;
            }
            else if(boardstate[i][j]==7){
                scoreofblack+=35;
            }
            else if(boardstate[i][j]==8){
                scoreofblack+=70;
            }
        }
    }
    return -scoreofblack+255;

}