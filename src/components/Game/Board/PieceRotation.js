const temp = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
];
export default function pieceRotation(boardtemp, i, j,c=0) {
    if(c){
        for (let q = i; q < i + 5; q++) {
            for (let w = j; w < j + 5; w++) {
                //console.log((4+i-q)+ "asd " +(w-j));
                temp[w-j][4+i-q] = boardtemp[q][w];
            }
        }
        //console.log(temp);
    } else{
        for (let q = i; q < i + 5; q++) {
            for (let w = j; w < j + 5; w++) {
                //console.log((4+i-q)+ "asd " +(w-j));
                temp[4+j-w][q-i] = boardtemp[q][w];
            }
        }
    }
    for (let q = i; q < i + 5; q++) {
        for (let w = j; w < j + 5; w++) {
            boardtemp[q][w]=temp[q-i][w-j];
        }
    }
    return boardtemp;
}
