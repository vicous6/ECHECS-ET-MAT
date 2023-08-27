import { showPossibleMoves } from "./ShowPossibleMove.js";

export function kingMove(king, board) {
    king.addEventListener("click", function () {
        showPossibleMoves(
            transformSquareIntoArrayNotation(king.className),
            board,
            king
        );
    });
}
