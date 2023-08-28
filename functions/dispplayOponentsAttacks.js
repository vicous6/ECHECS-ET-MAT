import { reRender } from "./displayHtml.js";
import { isKingInCheck } from "./isKingInCheck.js"
import { removeAllTargets } from "./removeAllTargets.js";

export function dispplayOponentsAttacks(board,turn){
    const tab = [0, 1, 2, 3, 4, 5, 6, 7];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            board[i][j].targetEnnemy = false;
            
        }
    }
    let fakeBoard= [...board]
    for(let x = 0 ; x < 8; x++){
        for(let y = 0 ; y < 8 ;y ++){
            
            
            if (fakeBoard[x][y].symbol === "B" && fakeBoard[x][y].color !== turn ) {
                // haut droite
                
                for (let i = 0; i < 8; i++) {
                    // diago haut gauche
                    
                    if (
                        tab.includes(x - i - 1) === false ||
                        tab.includes(y - i - 1) === false
                        ) {
                            break;
                    } else if (
                        fakeBoard[x - i - 1][y - i - 1].color === fakeBoard[x][y].color
                            ) {
                                break;
                    } else if (
                        fakeBoard[x - i - 1][y - i - 1].color !== fakeBoard[x][y].color &&
                        fakeBoard[x - i - 1][y - i - 1].color !== "void"
                        ) {
                        fakeBoard[x - i - 1][y - i - 1].targetEnnemy = true;
                        break;
                    } else {
                        fakeBoard[x - i - 1][y - i - 1].targetEnnemy = true;
                        
                    }
                }
                for (let i = 0; i < 8; i++) {
                    // diago haut droit
                    
                    if (
                        tab.includes(x - i - 1) === false ||
                        tab.includes(y + i + 1) === false
                        ) {
                            break;
                        } else if (
                            fakeBoard[x - i - 1][y + i + 1].color === fakeBoard[x][y].color
                            ) {
                                break;
                            } else if (
                                fakeBoard[x - i - 1][y + i + 1].color !== fakeBoard[x][y].color &&
                                fakeBoard[x - i - 1][y + i + 1].color !== "void"
                        ) {
                            fakeBoard[x - i - 1][y + i + 1].targetEnnemy = true;
                        break;
                    } else {
                        fakeBoard[x - i - 1][y + i + 1].targetEnnemy = true;
                    }
                }
                for (let i = 0; i < 8; i++) {
                    // diago bas droit
                    
                    if (
                        tab.includes(x + i + 1) === false ||
                        tab.includes(y + i + 1) === false
                    ) {
                        break;
                    } else if (
                        fakeBoard[x + i + 1][y + i + 1].color === fakeBoard[x][y].color
                        ) {
                            break;
                        } else if (
                            fakeBoard[x + i + 1][y + i + 1].color !== fakeBoard[x][y].color &&
                            fakeBoard[x + i + 1][y + i + 1].color !== "void"
                    ) {
                        fakeBoard[x + i + 1][y + i + 1].targetEnnemy = true;
                        break;
                    } else {
                        fakeBoard[x + i + 1][y + i + 1].targetEnnemy = true;
                    }
                }
                for (let i = 0; i < 8; i++) {
                    // diago bas fauche
    
                    if (
                        tab.includes(x + i + 1) === false ||
                        tab.includes(y - i - 1) === false
                        ) {
                            break;
                        } else if (
                            fakeBoard[x + i + 1][y - i - 1].color === fakeBoard[x][y].color
                        ) {
                        break;
                    } else if (
                        fakeBoard[x + i + 1][y - i - 1].color !== fakeBoard[x][y].color &&
                        board[x + i + 1][y - i - 1].color !== "void"
                        ) {
                            fakeBoard[x + i + 1][y - i - 1].targetEnnemy = true;
                            break;
                        } else {
                            fakeBoard[x + i + 1][y - i - 1].targetEnnemy = true;
                    }
                }
            }else if (fakeBoard[x][y].symbol === "R"&& fakeBoard[x][y].color !== turn ) {
                for (let i = 0; i < 8; i++) {
                    // ligne haute
    
                    if (
                        tab.includes(x - i - 1) === false ||
                        tab.includes(y) === false
                    ) {
                        break;
                    } else if (board[x - i - 1][y].color === board[x][y].color) {
                        break;
                    } else if (
                        board[x - i - 1][y].color !== board[x][y].color &&
                        board[x - i - 1][y].color !== "void"
                    ) {
                        board[x - i - 1][y].targetEnnemy = true;
                        break;
                    } else {
                        board[x - i - 1][y].targetEnnemy = true;
                    }
                }
                for (let i = 0; i < 8; i++) {
                    // ligne gauche
    
                    if (
                        tab.includes(x) === false ||
                        tab.includes(y - i - 1) === false
                    ) {
                        break;
                    } else if (board[x][y - i - 1].color === board[x][y].color) {
                        break;
                    } else if (
                        board[x][y - i - 1].color !== board[x][y].color &&
                        board[x][y - i - 1].color !== "void"
                    ) {
                        board[x][y - i - 1].targetEnnemy = true;
                        break;
                    } else {
                        board[x][y - i - 1].targetEnnemy = true;
                    }
                }
                for (let i = 0; i < 8; i++) {
                    // ligne basse
    
                    if (
                        tab.includes(x + i + 1) === false ||
                        tab.includes(y) === false
                    ) {
                        break;
                    } else if (board[x + i + 1][y].color === board[x][y].color) {
                        break;
                    } else if (
                        board[x + i + 1][y].color !== board[x][y].color &&
                        board[x + i + 1][y].color !== "void"
                    ) {
                        board[x + i + 1][y].targetEnnemy = true;
                        break;
                    } else {
                        board[x + i + 1][y].targetEnnemy = true;
                    }
                }
                for (let i = 0; i < 8; i++) {
                    // ligne droite
    
                    if (
                        tab.includes(x) === false ||
                        tab.includes(y + i + 1) === false
                    ) {
                        break;
                    } else if (board[x][y + i + 1].color === board[x][y].color) {
                        break;
                    } else if (
                        board[x][y + i + 1].color !== board[x][y].color &&
                        board[x][y + i + 1].color !== "void"
                    ) {
                        board[x][y + i + 1].targetEnnemy = true;
                        break;
                    } else {
                        board[x][y + i + 1].targetEnnemy = true;
                    }
                }
            } else if (fakeBoard[x][y].symbol=== "X"&& fakeBoard[x][y].color !== turn ) {
                // reinitialise si la case selectionnée est empty
                
            } else if (fakeBoard[x][y].symbol === "KI"&& fakeBoard[x][y].color !== turn ) {
                if (
                    tab.includes(x) === true &&
                    tab.includes(y + 1) === true &&
                    board[x][y + 1].color !== board[x][y].color
                ) {
                    board[x][y + 1].targetEnnemy = true;
                }
                // haut/droite
                if (
                    tab.includes(x - 1) === true &&
                    tab.includes(y + 1) === true &&
                    board[x - 1][y + 1].color !== board[x][y].color
                ) {
                    board[x - 1][y + 1].targetEnnemy = true;
                }
                // haut
                if (
                    tab.includes(x - 1) === true &&
                    tab.includes(y) === true &&
                    board[x - 1][y].color !== board[x][y].color
                ) {
                    board[x - 1][y].targetEnnemy = true;
                }
                // haut/gauche
                if (
                    tab.includes(x - 1) === true &&
                    tab.includes(y - 1) === true &&
                    board[x - 1][y - 1].color !== board[x][y].color
                ) {
                    board[x - 1][y - 1].targetEnnemy = true;
                }
                // gauche
                if (
                    tab.includes(x) === true &&
                    tab.includes(y - 1) === true &&
                    board[x][y - 1].color !== board[x][y].color
                ) {
                    board[x][y - 1].targetEnnemy = true;
                }
                // bas/gauche
                if (
                    tab.includes(x + 1) === true &&
                    tab.includes(y - 1) === true &&
                    board[x + 1][y - 1].color !== board[x][y].color
                ) {
                    board[x + 1][y - 1].targetEnnemy = true;
                }
                // bas
                if (
                    tab.includes(x + 1) === true &&
                    tab.includes(y) === true &&
                    board[x + 1][y].color !== board[x][y].color
                ) {
                    board[x + 1][y].targetEnnemy = true;
                }
                // bas/droite
                if (
                    tab.includes(x + 1) === true &&
                    tab.includes(y + 1) === true &&
                    board[x + 1][y + 1].color !== board[x][y].color
                ) {
                    board[x + 1][y + 1].targetEnnemy = true;
                }
    
                //
                if (
                    tab.includes(x) === true &&
                    tab.includes(y + 1) === true &&
                    tab.includes(y + 2) === true &&
                    tab.includes(y + 3) === true &&
                    board[x][y + 1].color === "void" &&
                    board[x][y + 2].color === "void" &&
                    board[x][y + 3].symbol === "R"&&
                    (x===0|| x===7)
    
                ) {
                    console.log(board[x][y])
                    if(board[x][y].color=== "white" && isRockAvailableForWhite === true){
                        
                        board[x][y + 2].targetEnnemy = true
                    }else if(board[x][y].color=== "black"&& isRockAvailableForBlack === true){
                        board[x][y + 2].targetEnnemy = true
                    }
                }
                if (
                    tab.includes(x) === true &&
                    tab.includes(y - 1) === true &&
                    tab.includes(y - 2) === true &&
                    tab.includes(y - 3) === true &&
                    tab.includes(y - 4) === true &&
                    board[x][y - 1].color === "void" &&
                    board[x][y - 2].color === "void" &&
                    board[x][y - 3].color === "void" &&
                    board[x][y - 4].symbol === "R"
                ) {
                    board[x][y - 2].targetEnnemy = true;
                }
               
                //
            } else if (fakeBoard[x][y].symbol=== "Q"&& fakeBoard[x][y].color !== turn ) {
                for (let i = 0; i < 8; i++) {
                    // ligne haute
    
                    if (
                        tab.includes(x - i - 1) === false ||
                        tab.includes(y) === false
                    ) {
                        break;
                    } else if (board[x - i - 1][y].color === board[x][y].color) {
                        break;
                    } else if (
                        board[x - i - 1][y].color !== board[x][y].color &&
                        board[x - i - 1][y].color !== "void"
                    ) {
                        board[x - i - 1][y].targetEnnemy = true;
                        break;
                    } else {
                        board[x - i - 1][y].targetEnnemy = true;
                    }
                }
                for (let i = 0; i < 8; i++) {
                    // ligne gauche
    
                    if (
                        tab.includes(x) === false ||
                        tab.includes(y - i - 1) === false
                    ) {
                        break;
                    } else if (board[x][y - i - 1].color === board[x][y].color) {
                        break;
                    } else if (
                        board[x][y - i - 1].color !== board[x][y].color &&
                        board[x][y - i - 1].color !== "void"
                    ) {
                        board[x][y - i - 1].targetEnnemy = true;
                        break;
                    } else {
                        board[x][y - i - 1].targetEnnemy = true;
                    }
                }
                for (let i = 0; i < 8; i++) {
                    // ligne basse
    
                    if (
                        tab.includes(x + i + 1) === false ||
                        tab.includes(y) === false
                    ) {
                        break;
                    } else if (board[x + i + 1][y].color === board[x][y].color) {
                        break;
                    } else if (
                        board[x + i + 1][y].color !== board[x][y].color &&
                        board[x + i + 1][y].color !== "void"
                    ) {
                        board[x + i + 1][y].targetEnnemy = true;
                        break;
                    } else {
                        board[x + i + 1][y].targetEnnemy = true;
                    }
                }
                for (let i = 0; i < 8; i++) {
                    // ligne droite
    
                    if (
                        tab.includes(x) === false ||
                        tab.includes(y + i + 1) === false
                    ) {
                        break;
                    } else if (board[x][y + i + 1].color === board[x][y].color) {
                        break;
                    } else if (
                        board[x][y + i + 1].color !== board[x][y].color &&
                        board[x][y + i + 1].color !== "void"
                    ) {
                        board[x][y + i + 1].targetEnnemy = true;
                        break;
                    } else {
                        board[x][y + i + 1].targetEnnemy = true;
                    }
                }
                for (let i = 0; i < 8; i++) {
                    // diago haut gauche
    
                    if (
                        tab.includes(x - i - 1) === false ||
                        tab.includes(y - i - 1) === false
                    ) {
                        break;
                    } else if (
                        board[x - i - 1][y - i - 1].color === board[x][y].color
                    ) {
                        break;
                    } else if (
                        board[x - i - 1][y - i - 1].color !== board[x][y].color &&
                        board[x - i - 1][y - i - 1].color !== "void"
                    ) {
                        board[x - i - 1][y - i - 1].targetEnnemy = true;
                        break;
                    } else {
                        board[x - i - 1][y - i - 1].targetEnnemy = true;
                    }
                }
                for (let i = 0; i < 8; i++) {
                    // diago haut droit
    
                    if (
                        tab.includes(x - i - 1) === false ||
                        tab.includes(y + i + 1) === false
                    ) {
                        break;
                    } else if (
                        board[x - i - 1][y + i + 1].color === board[x][y].color
                    ) {
                        break;
                    } else if (
                        board[x - i - 1][y + i + 1].color !== board[x][y].color &&
                        board[x - i - 1][y + i + 1].color !== "void"
                    ) {
                        board[x - i - 1][y + i + 1].targetEnnemy = true;
                        break;
                    } else {
                        board[x - i - 1][y + i + 1].targetEnnemy = true;
                    }
                }
                for (let i = 0; i < 8; i++) {
                    // diago bas droit
    
                    if (
                        tab.includes(x + i + 1) === false ||
                        tab.includes(y + i + 1) === false
                    ) {
                        break;
                    } else if (
                        board[x + i + 1][y + i + 1].color === board[x][y].color
                    ) {
                        break;
                    } else if (
                        board[x + i + 1][y + i + 1].color !== board[x][y].color &&
                        board[x + i + 1][y + i + 1].color !== "void"
                    ) {
                        board[x + i + 1][y + i + 1].targetEnnemy = true;
                        break;
                    } else {
                        board[x + i + 1][y + i + 1].targetEnnemy = true;
                    }
                }
                for (let i = 0; i < 8; i++) {
                    // diago bas fauche
    
                    if (
                        tab.includes(x + i + 1) === false ||
                        tab.includes(y - i - 1) === false
                    ) {
                        break;
                    } else if (
                        board[x + i + 1][y - i - 1].color === board[x][y].color
                    ) {
                        break;
                    } else if (
                        board[x + i + 1][y - i - 1].color !== board[x][y].color &&
                        board[x + i + 1][y - i - 1].color !== "void"
                    ) {
                        board[x + i + 1][y - i - 1].targetEnnemy = true;
                        break;
                    } else {
                        board[x + i + 1][y - i - 1].targetEnnemy = true;
                    }
                }
            } else if (fakeBoard[x][y].symbol === "KN"&& fakeBoard[x][y].color !== turn ) {
                for (let i = 0; i < 8; i++) {
                    // diago haut gauche
    
                    if (
                        tab.includes(x - 2) === false ||
                        tab.includes(y - 1) === false
                    ) {
                        break;
                    } else if (board[x - 2][y - 1].color === board[x][y].color) {
                        break;
                    } else if (
                        board[x - 2][y - 1].color !== board[x][y].color &&
                        board[x - 2][y - 1].color !== "void"
                    ) {
                        board[x - 2][y - 1].targetEnnemy = true;
                        break;
                    } else {
                        board[x - 2][y - 1].targetEnnemy = true;
                    }
                }
                for (let i = 0; i < 8; i++) {
                    // diago haut droit
    
                    if (
                        tab.includes(x - 2) === false ||
                        tab.includes(y + 1) === false
                    ) {
                        break;
                    } else if (board[x - 2][y + 1].color === board[x][y].color) {
                        break;
                    } else if (
                        board[x - 2][y + 1].color !== board[x][y].color &&
                        board[x - 2][y + 1].color !== "void"
                    ) {
                        board[x - 2][y + 1].targetEnnemy = true;
                        break;
                    } else {
                        board[x - 2][y + 1].targetEnnemy = true;
                    }
                }
    
                for (let i = 0; i < 8; i++) {
                    // diago haut droit
    
                    if (
                        tab.includes(x - 1) === false ||
                        tab.includes(y + 2) === false
                    ) {
                        break;
                    } else if (board[x - 1][y + 2].color === board[x][y].color) {
                        break;
                    } else if (
                        board[x - 1][y + 2].color !== board[x][y].color &&
                        board[x - 1][y + 2].color !== "void"
                    ) {
                        board[x - 1][y + 2].targetEnnemy = true;
                        break;
                    } else {
                        board[x - 1][y + 2].targetEnnemy = true;
                    }
                }
                for (let i = 0; i < 8; i++) {
                    // diago haut droit
    
                    if (
                        tab.includes(x + 1) === false ||
                        tab.includes(y + 2) === false
                    ) {
                        break;
                    } else if (board[x + 1][y + 2].color === board[x][y].color) {
                        break;
                    } else if (
                        board[x + 1][y + 2].color !== board[x][y].color &&
                        board[x + 1][y + 2].color !== "void"
                    ) {
                        board[x + 1][y + 2].targetEnnemy = true;
                        break;
                    } else {
                        board[x + 1][y + 2].targetEnnemy = true;
                    }
                }
                for (let i = 0; i < 8; i++) {
                    // diago haut droit
    
                    if (
                        tab.includes(x + 2) === false ||
                        tab.includes(y + 1) === false
                    ) {
                        break;
                    } else if (board[x + 2][y + 1].color === board[x][y].color) {
                        break;
                    } else if (
                        board[x + 2][y + 1].color !== board[x][y].color &&
                        board[x + 2][y + 1].color !== "void"
                    ) {
                        board[x + 2][y + 1].targetEnnemy = true;
                        break;
                    } else {
                        board[x + 2][y + 1].targetEnnemy = true;
                    }
                }
                for (let i = 0; i < 8; i++) {
                    // diago haut droit
    
                    if (
                        tab.includes(x + 2) === false ||
                        tab.includes(y - 1) === false
                    ) {
                        break;
                    } else if (board[x + 2][y - 1].color === board[x][y].color) {
                        break;
                    } else if (
                        board[x + 2][y - 1].color !== board[x][y].color &&
                        board[x + 2][y - 1].color !== "void"
                    ) {
                        board[x + 2][y - 1].targetEnnemy = true;
                        break;
                    } else {
                        board[x + 2][y - 1].targetEnnemy = true;
                    }
                }
                for (let i = 0; i < 8; i++) {
                    // diago haut droit
    
                    if (
                        tab.includes(x + 1) === false ||
                        tab.includes(y - 2) === false
                    ) {
                        break;
                    } else if (board[x + 1][y - 2].color === board[x][y].color) {
                        break;
                    } else if (
                        board[x + 1][y - 2].color !== board[x][y].color &&
                        board[x + 1][y - 2].color !== "void"
                    ) {
                        board[x + 1][y - 2].targetEnnemy = true;
                        break;
                    } else {
                        board[x + 1][y - 2].targetEnnemy = true;
                    }
                }
                for (let i = 0; i < 8; i++) {
                    // diago haut droit
    
                    if (
                        tab.includes(x - 1) === false ||
                        tab.includes(y - 2) === false
                    ) {
                        break;
                    } else if (board[x - 1][y - 2].color === board[x][y].color) {
                        break;
                    } else if (
                        board[x - 1][y - 2].color !== board[x][y].color &&
                        board[x - 1][y - 2].color !== "void"
                    ) {
                        board[x - 1][y - 2].targetEnnemy = true;
                        break;
                    } else {
                        board[x - 1][y - 2].targetEnnemy = true;
                    }
                }
            }else if(fakeBoard[x][y].symbol === "P"&& fakeBoard[x][y].color !== turn ){
    
                let sign = "+"
                if(board[x][y].color=== 'white'){
                    sign="-"
                }else if(board[x][y].color=== 'black'){
                    sign = "+"
                }
    
                // si deplacement normal de 1 case // mis en pause car les pions ne mangent pas devant
                // if (
                //     (tab.includes(eval(x+sign+1)) === true &&
                //     tab.includes(y) === true && 
                //     board[eval(x+sign+1)][y].color ==="void")
    
                // ) {
                //     board[eval(x+sign+1)][y].targetEnnemy= true
                //     // si case vide on regarde la deuxieme case
                //     // si deplcaement de 1 ok et que case etait vide, check deplacement de 2
                //     if(tab.includes(eval(x+sign+2)) === true &&
                //     board[eval(x+sign+2)][y].color === "void"
                //     ){
                     
                //         // check si les pion sont ssur leur ligne de depart
                //         if(board[x][y].color=== "white" && x ===6){
    
                //             board[eval(x+sign+2)][y].targetEnnemy= true
                //         }else if(board[x][y].color=== "black" && x ===1){
    
                //             board[eval(x+sign+2)][y].targetEnnemy= true
                //         }
                //     }
                    
                    
                // } 
                // deplacement dagonales droite
                if (
                    (tab.includes(eval(x+sign+1)) === true &&
                    tab.includes(y+1) === true && 
                    board[eval(x+sign+1)][y+1].color !== board[x][y].color)
                    
    
                ){
                    board[eval(x+sign+1)][y+1].targetEnnemy= true
                }
                // deplacement dagonales gauche
                if (
                    (tab.includes(eval(x+sign+1)) === true &&
                    tab.includes(y-1) === true && 
                    board[eval(x+sign+1)][y-1].color !== board[x][y].color)
                    
    
                ){
                    board[eval(x+sign+1)][y-1].targetEnnemy= true
                }
            }

            

            

        }}

        console.log(isKingInCheck(fakeBoard,turn))
        
      removeAllTargets(board)
    }