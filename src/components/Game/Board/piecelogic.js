export default function piecelogic(boardtemp,selectedPiece,selectedboxI,selectedboxJ,i,j){
    if(selectedPiece===1 && boardtemp[i][j] !==2 && boardtemp[i][j] !==3 && boardtemp[i][j] !==4){
        const aa=boardtemp;
        console.log("working");
        console.log(selectedboxI);
        const first = [1,2,2,1,-1,-2,-2,-1];
        const second = [2,1,-1,-2,-2,-1,1,2];
        for(var k=0;k<8;k++){
            if(first[k]+selectedboxI===i && second[k]+selectedboxJ===j){
                boardtemp[i][j]=boardtemp[selectedboxI][selectedboxJ];
                boardtemp[selectedboxI][selectedboxJ]=0;
                console.log(boardtemp);
                const aa=boardtemp;
                break;
            }
        }
        selectedPiece=-1;
    }else if(selectedPiece===2 && boardtemp[i][j] !==1 && boardtemp[i][j] !==3 && boardtemp[i][j] !==4){
        const aa=boardtemp;
        console.log("working");
        console.log(selectedboxJ);
        const first = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,-1,-2,-3,-4,-5,-6,-7,-8,-9,-1,-2,-3,-4,-5,-6,-7,-8,-9];
        const second = [1,2,3,4,5,6,7,8,9,-1,-2,-3,-4,-5,-6,-7,-8,-9,1,2,3,4,5,6,7,8,9,-1,-2,-3,-4,-5,-6,-7,-8,-9,];
        for(var k=0;k<36;k++){
            if(first[k]+selectedboxI===i && second[k]+selectedboxJ===j){
                boardtemp[i][j]=boardtemp[selectedboxI][selectedboxJ];
                boardtemp[selectedboxI][selectedboxJ]=0;
                console.log(boardtemp);
                const aa=boardtemp;            
                break;
            }
        }
        selectedPiece=-1;
    }else if(selectedPiece===3 && boardtemp[i][j] !==2 && boardtemp[i][j] !==1 && boardtemp[i][j] !==4){
        const aa=boardtemp;
        console.log("working");
        console.log(selectedboxI);
        const first = [1,2,3,4,5,6,7,8,9,-1,-2,-3,-4,-5,-6,-7,-8,-9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        const second = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,-1,-2,-3,-4,-5,-6,-7,-8,-9];
        for(var k=0;k<36;k++){
            if(first[k]+selectedboxI===i && second[k]+selectedboxJ===j){
                boardtemp[i][j]=boardtemp[selectedboxI][selectedboxJ];
                boardtemp[selectedboxI][selectedboxJ]=0;
                console.log(boardtemp);
                const aa=boardtemp;             
                break;
            }
        }
        selectedPiece=-1;
    }else if(selectedPiece===4 && boardtemp[i][j] !==2 && boardtemp[i][j] !==3 && boardtemp[i][j] !==1){
        const aa=boardtemp;
        console.log("working");
        console.log(selectedboxI);
        const first = [-1,0,1,1,1,0,-1,-1];
        const second = [1,1,1,0,-1,-1,-1,0];
        for(var k=0;k<8;k++){
            if(first[k]+selectedboxI===i && second[k]+selectedboxJ===j){
                boardtemp[i][j]=boardtemp[selectedboxI][selectedboxJ];
                boardtemp[selectedboxI][selectedboxJ]=0;
                console.log(boardtemp);
                const aa=boardtemp;                
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
        for(var k=0;k<8;k++){
            if(first[k]+selectedboxI===i && second[k]+selectedboxJ===j){
                boardtemp[i][j]=boardtemp[selectedboxI][selectedboxJ];
                boardtemp[selectedboxI][selectedboxJ]=0;
                console.log(boardtemp);
                const aa=boardtemp;
                break;
            }
        }
        selectedPiece=-1;
    }else if(selectedPiece===6 && boardtemp[i][j] !==5 && boardtemp[i][j] !==7 && boardtemp[i][j] !==8){
        const aa=boardtemp;
        console.log("working");
        console.log(selectedboxJ);
        const first = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,-1,-2,-3,-4,-5,-6,-7,-8,-9,-1,-2,-3,-4,-5,-6,-7,-8,-9];
        const second = [1,2,3,4,5,6,7,8,9,-1,-2,-3,-4,-5,-6,-7,-8,-9,1,2,3,4,5,6,7,8,9,-1,-2,-3,-4,-5,-6,-7,-8,-9,];
        for(var k=0;k<36;k++){
            if(first[k]+selectedboxI===i && second[k]+selectedboxJ===j){
                boardtemp[i][j]=boardtemp[selectedboxI][selectedboxJ];
                boardtemp[selectedboxI][selectedboxJ]=0;
                console.log(boardtemp);
                const aa=boardtemp;            
                break;
            }
        }
        selectedPiece=-1;
    }else if(selectedPiece===7 && boardtemp[i][j] !==5 && boardtemp[i][j] !==6 && boardtemp[i][j] !==8){
        const aa=boardtemp;
        console.log("working");
        console.log(selectedboxI);
        const first = [1,2,3,4,5,6,7,8,9,-1,-2,-3,-4,-5,-6,-7,-8,-9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        const second = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,-1,-2,-3,-4,-5,-6,-7,-8,-9];
        for(var k=0;k<36;k++){
            if(first[k]+selectedboxI===i && second[k]+selectedboxJ===j){
                boardtemp[i][j]=boardtemp[selectedboxI][selectedboxJ];
                boardtemp[selectedboxI][selectedboxJ]=0;
                console.log(boardtemp);
                const aa=boardtemp;             
                break;
            }
        }
        selectedPiece=-1;
    }else if(selectedPiece===8 && boardtemp[i][j] !==5 && boardtemp[i][j] !==6 && boardtemp[i][j] !==7){
        const aa=boardtemp;
        console.log("working");
        console.log(selectedboxI);
        const first = [-1,0,1,1,1,0,-1,-1];
        const second = [1,1,1,0,-1,-1,-1,0];
        for(var k=0;k<8;k++){
            if(first[k]+selectedboxI===i && second[k]+selectedboxJ===j){
                boardtemp[i][j]=boardtemp[selectedboxI][selectedboxJ];
                boardtemp[selectedboxI][selectedboxJ]=0;
                console.log(boardtemp);
                const aa=boardtemp;                
                break;
            }
        }
        
    }
    return boardtemp;
}