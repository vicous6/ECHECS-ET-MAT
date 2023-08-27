export class King {
    color;
    symbol;
    check;

    constructor(color) {
        this.color = color;
        this.symbol = "K";
        this.check = false;
        this.target = false;
        this.image =
            this.color === "white"
                ? `url(images/w${this.symbol}.svg)`
                : `url(images/b${this.symbol}.svg)`;
    }
}
