export function transformSquareIntoArrayNotation(piece) {
    const tab = ["A", "B", "C", "D", "E", "F", "G", "H"];
    console.log(piece)
    const letter = piece[0];
    const number = piece[1];

    return `${8 - number}${tab.indexOf(letter)}`;
}
