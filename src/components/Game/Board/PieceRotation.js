export default function pieceRotation(BoardState){
    var newArray = [];
    for(var q=0;q<9;q++){
        newArray.push([]);
    };

    for(var q=0;q<9;q++){
        for(var w=0;w<9;w++){
            newArray[q][w]=BoardState[w][8-q];
        };
    };
    BoardState = newArray;
    return BoardState;
}