export class Pawn {
    color;
    symbol;
    target;

    constructor(color) {
        this.color = color;
        this.symbol = "P";
        this.target = false;
        this.targetEnnemy = false
    }
}
