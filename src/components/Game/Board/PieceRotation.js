export default function pieceRotation(boardtemp,i,j){
    var newBoardArray = [];
    for(var q=0;q<15;q++){
        newBoardArray.push([]);
    };

    for(var q=j+4;q>=j;q--){
        for(var w=i;w<i+5;w++){
            newBoardArray[q-4][w]=boardtemp[w][q-4];
        };
    };
    console.log("hello");
    boardtemp = newBoardArray;
    return boardtemp;
}