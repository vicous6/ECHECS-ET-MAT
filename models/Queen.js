export class Queen {
    color;
    symbol;
    target;

    constructor(color) {
        this.color = color;
        this.symbol = "Q";
        this.target = false;
        this.image =
            this.color === "white"
                ? `url(images/w${this.symbol}.svg)`
                : `url(images/b${this.symbol}.svg)`;
    }
}
