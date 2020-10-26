export default function wallRotation(boardtemp, i, j,c) {
    const temp = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ];
    if(c){
        for (let q = i; q < i + 5; q++) {
            for (let w = j; w < j + 5; w++) {
                if(boardtemp[q][w]>0) temp[w-j][4+i-q] = (boardtemp[q][w]+2)%4+1;
            }
        }
        
    } else{
        for (let q = i; q < i + 5; q++) {
            for (let w = j; w < j + 5; w++) {
                if(boardtemp[q][w]>0) temp[4+j-w][q-i] = (boardtemp[q][w])%4+1;

            }
        }
    }
    console.log(temp);
    for (let q = i; q < i + 5; q++) {
        for (let w = j; w < j + 5; w++) {
            boardtemp[q][w]=temp[q-i][w-j];
        }
    }
    console.log(boardtemp)
    return boardtemp;
}