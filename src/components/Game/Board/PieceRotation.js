export default function pieceRotation(boardtemp,i,j){
    var newBoardArray=boardtemp;
    console.log(newBoardArray);
    for(var q=i;q<i+5;q++){
        for(var w=j;w<j+5;w++){
            newBoardArray[q][w]=boardtemp[w][q];
        };
    };
    boardtemp = newBoardArray;
    return boardtemp;
}