let cells = document.querySelectorAll(".cell");
let result = document.querySelector(".result");
let btn = document.querySelector("button");

let currentPlayer = "X";

let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(function (cell) {

    cell.addEventListener("click", function () {

        if (cell.innerHTML == "" && result.innerHTML == "") {

            cell.innerHTML = currentPlayer;

            checkWinner();

            if (currentPlayer == "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }

        }

    });

});

function checkWinner() {

    let values = [];

    cells.forEach(function (cell) {
        values.push(cell.innerHTML);
    });

    for (let i = 0; i < wins.length; i++) {

        let a = wins[i][0];
        let b = wins[i][1];
        let c = wins[i][2];

        if (
            values[a] != "" &&
            values[a] == values[b] &&
            values[b] == values[c]
        ) {

            result.innerHTML = values[a] + " Wins";
            return;
        }

    }

    if (!values.includes("")) {
        result.innerHTML = "Draw";
    }

}

btn.addEventListener("click", function () {

    cells.forEach(function (cell) {
        cell.innerHTML = "";
    });

    result.innerHTML = "";
    currentPlayer = "X";

});