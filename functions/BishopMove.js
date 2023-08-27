import { showPossibleMoves } from "./ShowPossibleMove.js";

export function bishopMove(bishop, board) {
    bishop.addEventListener("click", function () {
        showPossibleMoves(
            transformSquareIntoArrayNotation(bishop.className),
            board,
            bishop
        );
    });
}
