import { reRender } from "./displayHtml.js";
export function removeAllTargets(board) {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            board[i][j].target = false;
            
        }
    }
    reRender(board);
}
