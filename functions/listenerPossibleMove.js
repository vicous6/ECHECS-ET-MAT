import { showPossibleMoves } from "./ShowPossibleMove.js";
import { transformSquareIntoArrayNotation } from "./transformSquareIntoArrayNotation.js";

function addListener(piece, board) {
    piece.addEventListener("click", function () {
        showPossibleMoves(
            transformSquareIntoArrayNotation(piece.className),
            board,
            piece
        );
    });
}

export function listenerPossibleMove(board) {
    const pieces = document.getElementsByTagName("div");
    for (let piece in pieces) {
        // pieces[piece].innerHTML filters out HTMLcollection's methods, by returning undefined
        pieces[piece].innerHTML && addListener(pieces[piece], board);
    }
}
