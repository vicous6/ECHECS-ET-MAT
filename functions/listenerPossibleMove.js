import { knightMove } from "./KnightMove.js";
import { bishopMove } from "./BishopMove.js";
import { rookMove } from "./RookMove.js";
import { emptyMove } from "./EmptyMove.js";
import { kingMove } from "./KingMove.js";
import { queenMove } from "./QueenMove.js";

export function listenerPossibleMove(board) {
    let pieces = document.getElementsByTagName("div");
    console.log(board);
    for (let i = 0; i < 64; i++) {
        if (pieces[i].innerHTML === "KN") {
            knightMove(pieces[i], board);
        } else if (pieces[i].innerHTML === "B") {
            bishopMove(pieces[i], board);
        } else if (pieces[i].innerHTML === "R") {
            rookMove(pieces[i], board);
        } else if (pieces[i].innerHTML === "X") {
            emptyMove(pieces[i], board);
        } else if (pieces[i].innerHTML === "KI") {
            kingMove(pieces[i], board);
        } else if (pieces[i].innerHTML === "Q") {
            queenMove(pieces[i], board);
        }
    }
}
