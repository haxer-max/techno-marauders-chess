export default function wallRotation(walls){
    var newArray2 = [];
    for(var q=0;q<9;q++){
        newArray2.push([]);
    };

    for(var q=0;q<9;q++){
        for(var w=0;w<9;w++){
            newArray2[q][w]=walls[w][8-q];
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
    walls = newArray2;
    return walls;
}