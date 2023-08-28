export function isKingInCheck(fakeBoard,turn){

    for(let i = 0 ; i < 8; i++){
        for(let j = 0 ; j < 8 ;j ++){
            // console.log(i)
            // console.log(fakeBoard[i][j])
            if(fakeBoard[i][j].symbol === "KI" && fakeBoard[i][j].targetEnnemy === true ){
                
                return "Tour des "+`${turn}`+' le roi est attaqué'
            }
        }
    }
    return "pas d'echecs"
}