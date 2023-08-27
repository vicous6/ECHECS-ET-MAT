export class Pawn {
    color;
    symbol;
    target;

    constructor(color) {
        this.color = color;
        this.symbol = "P";
        this.target = false;
        this.image =
            this.color === "white"
                ? `url(images/w${this.symbol}.svg)`
                : `url(images/b${this.symbol}.svg)`;
    }
}
