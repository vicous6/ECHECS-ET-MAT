import { listenerPossibleMove } from "./listenerPossibleMove.js";

export function reRender(board) {
    const htmlBoard = document.getElementById("board");
    // delete previous board
    while (htmlBoard.lastElementChild) {
        htmlBoard.removeChild(htmlBoard.lastElementChild);
    }

    const tiles = [];
    let tab = ["A", "B", "C", "D", "E", "F", "G", "H"];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let newTile = document.createElement("div");
            newTile.classList.add(tab[j] + (8 - i));

            if (typeof board[i][j] === "object") {
                if (board[i][j].target === true) {
                    newTile.setAttribute("id", "target");
                }
                newTile.innerHTML = board[i][j].symbol;
                newTile.style.backgroundImage = board[i][j].image;
                newTile.style.backgroundSize = "cover";
                tiles.push(newTile);
            }
        }
    }
    tiles.map((tile) => htmlBoard.appendChild(tile));
    listenerPossibleMove(board);
}
