import { showPossibleMoves } from "./ShowPossibleMove.js";

export function queenMove(queen, board) {
    queen.addEventListener("click", function () {
        showPossibleMoves(
            transformSquareIntoArrayNotation(queen.className),
            board,
            queen
        );
    });
}
