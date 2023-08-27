import { showPossibleMoves } from "./ShowPossibleMove.js";

export function emptyMove(empty, board) {
    empty.addEventListener("click", function () {
        showPossibleMoves(
            transformSquareIntoArrayNotation(empty.className),
            board,
            empty
        );
    });
}
