import { Pawn } from '../models/Pawn.js'
import { King } from '../models/King.js'
import { Knight } from '../models/Knight.js'
import { Bishop } from '../models/Bishop.js'
import { Rook } from '../models/Rook.js'
import { Queen } from '../models/Queen.js'
import { Empty } from '../models/Empty.js'



export function initJsBoard(){
   

    let board = []

    let ligne1 = []
    let ligne2 = []
    let ligne3 = []
    let ligne4 = []
    let ligne5 = []
    let ligne6 = []
    let ligne7 = []
    let ligne8 = []

// pour remettre les pions
    // for(let i = 0 ; i < 8 ; i++){
    //   ligne2.push(new Pawn("black"))
    //   ligne7.push(new Pawn("white"))
    // }

    ligne7.push(new Empty("void"))
    ligne7.push(new Empty("void"))
    ligne7.push(new Empty("void"))
    ligne7.push(new Empty("void"))
    ligne7.push(new Empty("void"))
    ligne7.push(new Empty("void"))
    ligne7.push(new Empty("void"))
    ligne7.push(new Empty("void"))

    ligne2.push(new Empty("void"))
    ligne2.push(new Empty("void"))
    ligne2.push(new Empty("void"))
    ligne2.push(new Empty("void"))
    ligne2.push(new Empty("void"))
    ligne2.push(new Empty("void"))
    ligne2.push(new Empty("void"))
    ligne2.push(new Empty("void"))

   
    for(let i = 0 ; i < 8 ; i++){
       
        ligne3.push(new Empty("void"))
       
        ligne4.push(new Empty("void"))
       
        ligne5.push(new Empty("void"))
        
        ligne6.push(new Empty("void"))
        

        if(i===0){
            ligne1.push(new Rook("black"))
            ligne8.push(new Rook("white"))
        }else
        if(i===1){
            ligne1.push(new Knight("black"))
            ligne8.push(new Knight("white"))
        }
        else
        if(i===2){
            ligne1.push(new Bishop("black"))
            ligne8.push(new Bishop("white"))
        }
        else
        if(i===3){
            ligne1.push(new Queen("black"))
            ligne8.push(new Queen("white"))
        }
        else
        if(i===4){
            ligne1.push(new King("black"))
            ligne8.push(new King("white"))
        }
        else
        if(i===5){
            ligne1.push(new Bishop("black"))
            ligne8.push(new Bishop("white"))
        }
        else
        if(i===6){
            ligne1.push(new Knight("black"))
            ligne8.push(new Knight("white"))
        }
        else
        if(i===7){
            ligne1.push(new Rook("black"))
            ligne8.push(new Rook("white"))
        }
        
    }


    board.push(ligne1)
    board.push(ligne2)
    board.push(ligne3)
    board.push(ligne4)
    board.push(ligne5)
    board.push(ligne6)
    board.push(ligne7)
    board.push(ligne8)



return board

  }