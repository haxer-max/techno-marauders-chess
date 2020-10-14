export default function wallRotation(wallstemp,i,j){
    var newArray2 = [];
    for(var q=0;q<15;q++){
        newArray2.push([]);
    };

    for(var q=i;q<i+5;q++){
        for(var w=j;w<j+5;w++){
            newArray2[q][w]=wallstemp[w][q];
            if(newArray2[q][w]===1){
                newArray2[q][w]=2;
            }
            else if(newArray2[q][w]===2){
               newArray2[q][w]=3;
            }
            else if(newArray2[q][w]===3){
                newArray2[q][w]=4;
            }
            else if(newArray2[q][w]===4){
                newArray2[q][w]=1;
            }
        };
    };
    wallstemp = newArray2;
    return wallstemp;
}