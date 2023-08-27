import { Knight } from "../models/Knight.js";
import { showPossibleMoves } from "./ShowPossibleMove.js";

export function knightMove(knight, board) {
    knight.addEventListener("click", function () {
        showPossibleMoves(
            transformSquareIntoArrayNotation(knight.className),
            board,
            knight
        );
    });
}
