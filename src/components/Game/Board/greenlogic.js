import {wrook,brook} from './PieceLogic/rook';
import {wknight, bknight} from './PieceLogic/knight';
import {wbishop, bbishop} from './PieceLogic/bishop';
import {wking, bking} from './PieceLogic/king';

export default function greenlogic(i,j,piece,wall,green){
    console.log("greeeeeeeeeeeeen")
    switch(piece[i][j]){
        case 1: wknight(i,j,piece,wall,green); break;
        case 2: wbishop(i,j,piece,wall,green); break;
        case 3: wrook(i,j,piece,wall,green); break;
        case 4: wking(i,j,piece,wall,green); break;
        case 5: bknight(i,j,piece,wall,green); break;
        case 6: bbishop(i,j,piece,wall,green); break;
        case 7: brook(i,j,piece,wall,green); break;
        case 8: bking(i,j,piece,wall,green); break;
    }

}
//  __
// 1     2|a     3__   4 a|

