import { knightMoove } from './KnightMoove.js'
import { bishopMoove } from './BishopMoove.js'
import { rookMoove } from './RookMoove.js'
import { emptyMoove } from './EmptyMoove.js'
import { kingMoove } from './KingMoove.js'
import { queenMoove } from './QueenMoove.js'


export function listenerPossibleMoove(board){

    let pieces = document.getElementsByTagName("div")
    console.log(board)
    for(let i = 0 ; i < 64 ; i++){

        
        if(pieces[i].innerHTML==="KN"){

            knightMoove(pieces[i],board)
          
        }else if(pieces[i].innerHTML==="B"){
            bishopMoove(pieces[i],board)
          
        }else if(pieces[i].innerHTML==="R"){
            rookMoove(pieces[i],board)
         
        }
        else if(pieces[i].innerHTML==="X"){
            emptyMoove(pieces[i],board)
         
        }
        else if(pieces[i].innerHTML==="KI"){
            kingMoove(pieces[i],board)
         
        }
        else if(pieces[i].innerHTML==="Q"){
            queenMoove(pieces[i],board)
         
        }
    }
    

   

}