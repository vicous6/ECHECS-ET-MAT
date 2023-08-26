import { showPossibleMoves } from "./ShowPossibleMove.js";

export function emptyMove(empty, board) {
    empty.addEventListener("click", function () {
        console.log(board);
        function transformSquareIntoArrayNotation(piece) {
            let tab = ["A", "B", "C", "D", "E", "F", "G", "H"];
            let letter = piece[0];
            let number = piece[1];
            if (number === "1") {
                return "7" + tab.indexOf(letter);
            } else if (number === "2") {
                return "6" + tab.indexOf(letter);
            } else if (number === "3") {
                return "5" + tab.indexOf(letter);
            } else if (number === "4") {
                return "4" + tab.indexOf(letter);
            } else if (number === "5") {
                return "3" + tab.indexOf(letter);
            } else if (number === "6") {
                return "2" + tab.indexOf(letter);
            } else if (number === "7") {
                return "1" + tab.indexOf(letter);
            } else if (number === "8") {
                return "0" + tab.indexOf(letter);
            }
        }
        console.log(board);
        // console.log(transformSquareIntoArrayNotation(bishop.className))
        showPossibleMoves(
            transformSquareIntoArrayNotation(empty.className),
            board,
            empty
        );
    });
}
