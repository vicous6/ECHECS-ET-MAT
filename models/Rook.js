export class Rook {
    color;
    symbol;
    target;

    constructor(color) {
        this.color = color;
        this.symbol = "R";
        this.target = false;
        this.image =
            this.color === "white"
                ? `url(images/w${this.symbol}.svg)`
                : `url(images/b${this.symbol}.svg)`;
    }
}
