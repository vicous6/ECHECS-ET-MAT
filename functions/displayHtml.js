import { listenerPossibleMove } from "./listenerPossibleMove.js";

export function reRender(fullBoard) {
    console.log(fullBoard);
    let board = document.getElementById("board");
    while (board.lastElementChild) {
        board.removeChild(board.lastElementChild);
    }
    let tab = ["A", "B", "C", "D", "E", "F", "G", "H"];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let neww = document.createElement("div");
            neww.classList.add(tab[j] + (8 - i));
            if (typeof fullBoard[i][j] === "object") {
                if (fullBoard[i][j].target === true) {
                    neww.setAttribute("id", "target");
                } else if (fullBoard[i][j].target === false) {
                    // neww.removeAttribute("id")
                }

                neww.innerHTML = fullBoard[i][j].symbol;
                if (
                    fullBoard[i][j].symbol === "KI" &&
                    fullBoard[i][j].color === "white"
                ) {
                    neww.style.background = "url(images/white-king.jpg)";
                    neww.style.backgroundSize = "cover";
                } else if (
                    fullBoard[i][j].symbol === "KI" &&
                    fullBoard[i][j].color === "black"
                ) {
                    neww.style.background = "url(images/black-king.jpg)";
                    neww.style.backgroundSize = "cover";
                } else if (
                    fullBoard[i][j].symbol === "KN" &&
                    fullBoard[i][j].color === "white"
                ) {
                    neww.style.background = "url(images/white-knight.png)";
                    neww.style.backgroundSize = "cover";
                } else if (
                    fullBoard[i][j].symbol === "KN" &&
                    fullBoard[i][j].color === "black"
                ) {
                    neww.style.background = "url(images/black-knight.png)";
                    neww.style.backgroundSize = "cover";
                } else if (
                    fullBoard[i][j].symbol === "P" &&
                    fullBoard[i][j].color === "white"
                ) {
                    neww.style.background = "url(images/white-pawn.jpg)";
                    neww.style.backgroundSize = "cover";
                } else if (
                    fullBoard[i][j].symbol === "P" &&
                    fullBoard[i][j].color === "black"
                ) {
                    neww.style.background = "url(images/black-pawn.jpg)";
                    neww.style.backgroundSize = "cover";
                } else if (
                    fullBoard[i][j].symbol === "R" &&
                    fullBoard[i][j].color === "white"
                ) {
                    neww.style.background = "url(images/white-rook.png)";
                    neww.style.backgroundSize = "cover";
                } else if (
                    fullBoard[i][j].symbol === "R" &&
                    fullBoard[i][j].color === "black"
                ) {
                    neww.style.background = "url(images/black-rook.jpg)";
                    neww.style.backgroundSize = "cover";
                } else if (
                    fullBoard[i][j].symbol === "B" &&
                    fullBoard[i][j].color === "white"
                ) {
                    neww.style.background = "url(images/white-bishop.jpg)";
                    neww.style.backgroundSize = "cover";
                } else if (
                    fullBoard[i][j].symbol === "B" &&
                    fullBoard[i][j].color === "black"
                ) {
                    neww.style.background = "url(images/black-bishop.jpg)";
                    neww.style.backgroundSize = "cover";
                } else if (
                    fullBoard[i][j].symbol === "Q" &&
                    fullBoard[i][j].color === "white"
                ) {
                    neww.style.background = "url(images/white-queen.jpg)";
                    neww.style.backgroundSize = "cover";
                } else if (
                    fullBoard[i][j].symbol === "Q" &&
                    fullBoard[i][j].color === "black"
                ) {
                    neww.style.background = "url(images/black-queen.png)";
                    neww.style.backgroundSize = "cover";
                } else if (fullBoard[i][j].symbol === "X") {
                    neww.style.background = "white";
                }
            }
            board.appendChild(neww);
        }
    }
    console.log(fullBoard);
    // listenerPossibleMove(board)
    listenerPossibleMove(fullBoard);
}
