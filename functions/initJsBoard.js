import { Pawn } from "../models/Pawn.js";
import { King } from "../models/King.js";
import { Knight } from "../models/Knight.js";
import { Bishop } from "../models/Bishop.js";
import { Rook } from "../models/Rook.js";
import { Queen } from "../models/Queen.js";
import { Empty } from "../models/Empty.js";

export function initJsBoard() {
    const row1 = [
        new Rook("black"),
        new Knight("black"),
        new Bishop("black"),
        new Queen("black"),
        new King("black"),
        new Bishop("black"),
        new Knight("black"),
        new Rook("black"),
    ];
    const row8 = [
        new Rook("white"),
        new Knight("white"),
        new Bishop("white"),
        new Queen("white"),
        new King("white"),
        new Bishop("white"),
        new Knight("white"),
        new Rook("white"),
    ];

    const row2 = [];
    const row3 = [];
    const row4 = [];
    const row5 = [];
    const row6 = [];
    const row7 = [];

    const board = [row1, row2, row3, row4, row5, row6, row7, row8];

    for (let column = 0; column < 8; column++) {
        row3.push(new Empty("void"));
        row4.push(new Empty("void"));
        row5.push(new Empty("void"));
        row6.push(new Empty("void"));

        // pour remettre les pions
        // enlever:
        row2.push(new Empty("void"));
        row7.push(new Empty("void"));
        // remettre:
        // row2.push(new Pawn("black"));
        // row7.push(new Pawn("white"));
    }

    return board;
}
