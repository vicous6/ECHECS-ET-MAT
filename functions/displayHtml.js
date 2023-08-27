import { listenerPossibleMove } from "./listenerPossibleMove.js";

export function reRender(fullBoard) {
    console.log(fullBoard)
    const board = document.getElementById("board");
    while (board.lastElementChild) {
        board.removeChild(board.lastElementChild);
    }
    let tab = ["A", "B", "C", "D", "E", "F", "G", "H"];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let newTile = document.createElement("div");
            newTile.classList.add(tab[j] + (8 - i));
            newTile.classList.add("tile");
            if (typeof fullBoard[i][j] === "object") {
                if (fullBoard[i][j].target === true) {
                    newTile.setAttribute("id", "target");
                } else if (fullBoard[i][j].target === false) {
                }

                newTile.innerHTML = fullBoard[i][j].symbol;
                if (
                    fullBoard[i][j].symbol === "KI" &&
                    fullBoard[i][j].color === "white"
                ) {
                    newTile.style.backgroundImage = "url(images/wK.svg)";
                    newTile.style.backgroundSize = "cover";
                } else if (
                    fullBoard[i][j].symbol === "KI" &&
                    fullBoard[i][j].color === "black"
                ) {
                    newTile.style.backgroundImage = "url(images/bK.svg)";
                    newTile.style.backgroundSize = "cover";
                } else if (
                    fullBoard[i][j].symbol === "KN" &&
                    fullBoard[i][j].color === "white"
                ) {
                    newTile.style.backgroundImage = "url(images/wN.svg)";
                    newTile.style.backgroundSize = "cover";
                } else if (
                    fullBoard[i][j].symbol === "KN" &&
                    fullBoard[i][j].color === "black"
                ) {
                    newTile.style.backgroundImage = "url(images/bN.svg)";
                    newTile.style.backgroundSize = "cover";
                } else if (
                    fullBoard[i][j].symbol === "P" &&
                    fullBoard[i][j].color === "white"
                ) {
                    newTile.style.backgroundImage = "url(images/wP.svg)";
                    newTile.style.backgroundSize = "cover";
                } else if (
                    fullBoard[i][j].symbol === "P" &&
                    fullBoard[i][j].color === "black"
                ) {
                    newTile.style.backgroundImage = "url(images/bP.svg)";
                    newTile.style.backgroundSize = "cover";
                } else if (
                    fullBoard[i][j].symbol === "R" &&
                    fullBoard[i][j].color === "white"
                ) {
                    newTile.style.backgroundImage = "url(images/wR.svg)";
                    newTile.style.backgroundSize = "cover";
                } else if (
                    fullBoard[i][j].symbol === "R" &&
                    fullBoard[i][j].color === "black"
                ) {
                    newTile.style.backgroundImage = "url(images/bR.svg)";
                    newTile.style.backgroundSize = "cover";
                } else if (
                    fullBoard[i][j].symbol === "B" &&
                    fullBoard[i][j].color === "white"
                ) {
                    newTile.style.backgroundImage = "url(images/wB.svg)";
                    newTile.style.backgroundSize = "cover";
                } else if (
                    fullBoard[i][j].symbol === "B" &&
                    fullBoard[i][j].color === "black"
                ) {
                    newTile.style.backgroundImage = "url(images/bB.svg)";
                    newTile.style.backgroundSize = "cover";
                } else if (
                    fullBoard[i][j].symbol === "Q" &&
                    fullBoard[i][j].color === "white"
                ) {
                    newTile.style.backgroundImage = "url(images/wQ.svg)";
                    newTile.style.backgroundSize = "cover";
                } else if (
                    fullBoard[i][j].symbol === "Q" &&
                    fullBoard[i][j].color === "black"
                ) {
                    newTile.style.backgroundImage = "url(images/bQ.svg)";
                    newTile.style.backgroundSize = "cover";
                }
            }
            board.appendChild(newTile);
        }
    }
    listenerPossibleMove(fullBoard);
}
