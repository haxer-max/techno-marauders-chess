export default function wallslogicc(boardtemp,selectedPiece,selectedboxI,selectedboxJ){
    if(selectedPiece===1 && boardtemp[i][j] !==2 && boardtemp[i][j] !==3 && boardtemp[i][j] !==4){
        const aa=boardtemp;
        console.log("working");
        console.log(selectedboxI);
        const first = [1,2,2,1,-1,-2,-2,-1];
        const second = [2,1,-1,-2,-2,-1,1,2];
        for(var k=0;k<36;k++){
            if(first[k]+selectedboxI>=0 && first[k]+selectedboxI<15 && second[k]+selectedboxJ>=0 && second[k]+selectedboxJ<10){
            boardtemp[selectedboxI+first[k]][selectedboxJ+second[k]]=1;
            console.log(boardtemp);
            }
            else{
                break;
            }
        }
    }else if(selectedPiece===2 && boardtemp[i][j] !==1 && boardtemp[i][j] !==3 && boardtemp[i][j] !==4){
        const aa=boardtemp;
        console.log("working");
        console.log(selectedboxJ);
        const first = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15];
        const second = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15];
        for(var k=0;k<36;k++){
            if(first[k]+selectedboxI>=0 && first[k]+selectedboxI<15 && second[k]+selectedboxJ>=0 && second[k]+selectedboxJ<10){
            boardtemp[selectedboxI+first[k]][selectedboxJ+second[k]]=2;
            console.log(boardtemp);
            }
            else{
                break;
            }
        }
        //const aa=boardtemp;
    }else if(selectedPiece===3 && boardtemp[i][j] !==2 && boardtemp[i][j] !==1 && boardtemp[i][j] !==4){
        const aa=boardtemp;
        console.log("working");
        console.log(selectedboxI);
        const first = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        const second = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15];
        for(var k=0;k<36;k++){
            if(first[k]+selectedboxI>=0 && first[k]+selectedboxI<15 && second[k]+selectedboxJ>=0 && second[k]+selectedboxJ<10){
            boardtemp[selectedboxI+first[k]][selectedboxJ+second[k]]=3;
            console.log(boardtemp);
            }
            else{
                break;
            }
        }
    }else if(selectedPiece===4 && boardtemp[i][j] !==2 && boardtemp[i][j] !==3 && boardtemp[i][j] !==1){
        const aa=boardtemp;
        console.log("working");
        console.log(selectedboxI);
        const first = [-1,0,1,1,1,0,-1,-1];
        const second = [1,1,1,0,-1,-1,-1,0];
        for(var k=0;k<36;k++){
            if(first[k]+selectedboxI>=0 && first[k]+selectedboxI<15 && second[k]+selectedboxJ>=0 && second[k]+selectedboxJ<10){
            boardtemp[selectedboxI+first[k]][selectedboxJ+second[k]]=4;
            console.log(boardtemp);
            }
            else{
                break;
            }
        }
        
    }
    else if(selectedPiece===5 && boardtemp[i][j] !==6 && boardtemp[i][j] !==7 && boardtemp[i][j] !==8){
        const aa=boardtemp;
        console.log("working");
        console.log(selectedboxI);
        const first = [1,2,2,1,-1,-2,-2,-1];
        const second = [2,1,-1,-2,-2,-1,1,2];
        for(var k=0;k<36;k++){
            if(first[k]+selectedboxI>=0 && first[k]+selectedboxI<15 && second[k]+selectedboxJ>=0 && second[k]+selectedboxJ<10){
            boardtemp[selectedboxI+first[k]][selectedboxJ+second[k]]=5;
            console.log(boardtemp);
            }
            else{
                break;
            }
        }
    }else if(selectedPiece===6 && boardtemp[i][j] !==5 && boardtemp[i][j] !==7 && boardtemp[i][j] !==8){
        const aa=boardtemp;
        console.log("working");
        console.log(selectedboxJ);
        const first = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15];
        const second = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15];
        for(var k=0;k<36;k++){
            if(first[k]+selectedboxI>=0 && first[k]+selectedboxI<15 && second[k]+selectedboxJ>=0 && second[k]+selectedboxJ<10){
            boardtemp[selectedboxI+first[k]][selectedboxJ+second[k]]=6;
            console.log(boardtemp);
            }
            else{
                break;
            }
        }
    }else if(selectedPiece===7 && boardtemp[i][j] !==5 && boardtemp[i][j] !==6 && boardtemp[i][j] !==8){
        const aa=boardtemp;
        console.log("working");
        console.log(selectedboxI);
        const first = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        const second = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15];
        for(var k=0;k<36;k++){
            if(first[k]+selectedboxI>=0 && first[k]+selectedboxI<15 && second[k]+selectedboxJ>=0 && second[k]+selectedboxJ<10){
            boardtemp[selectedboxI+first[k]][selectedboxJ+second[k]]=7;
            console.log(boardtemp);
            }
            else{
                break;
            }
        }
    }else if(selectedPiece===8 && boardtemp[i][j] !==5 && boardtemp[i][j] !==6 && boardtemp[i][j] !==7){
        const aa=boardtemp;
        console.log("working");
        console.log(selectedboxI);
        const first = [-1,0,1,1,1,0,-1,-1];
        const second = [1,1,1,0,-1,-1,-1,0];
        for(var k=0;k<36;k++){
            if(first[k]+selectedboxI>=0 && first[k]+selectedboxI<15 && second[k]+selectedboxJ>=0 && second[k]+selectedboxJ<10){
            boardtemp[selectedboxI+first[k]][selectedboxJ+second[k]]=8;
            console.log(boardtemp);
            }
            else{
                break;
            }
        }
        
    }
    return boardtemp;
}