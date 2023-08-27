import { showPossibleMoves } from "./ShowPossibleMove.js";
import transformSquareIntoArrayNotation from "./transformSquareIntoArrayNotation.js";
export function rookMove(rook, board) {
    rook.addEventListener("click", function () {
        showPossibleMoves(
            transformSquareIntoArrayNotation(rook.className),
            board,
            rook
        );
    });
}
