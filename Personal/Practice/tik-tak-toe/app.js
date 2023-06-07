// Tic tak toe JavaScript File for tic_tak_toe.html

// Global Variables
var player = 1;
var player1 = [];
var player2 = [];
var win = false;
var winCombos = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // Horizontal
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // Vertical
    [1, 5, 9], [3, 5, 7]             // Diagonal
];

// Functions
function checkWin(combo, player) {

    if (combo.length >= 3) {

        for (var i = 0; i < winCombos.length; i++) {
            if (combo.includes(winCombos[i][0]) && combo.includes(winCombos[i][1]) && combo.includes(winCombos[i][2])) {
                alert(`Player ${player} wins!`);
                win = true;
            }
        } 

        if (player1.length + player2.length === 9  && win === false) {
            alert("Draw! Please reset.");
        }
    }
}

function reset() {
    // Reset game
    player = 1;
    player1 = [];
    player2 = [];
    win = false;
    for (var i = 1; i <= 9; i++) {
        document.getElementById(i).innerHTML = "";
    }
}

function play(id, cell) {
   

    // PLAYER 1
    if (player === 1) {

        document.getElementById(cell).innerHTML = '<span><img class="icon" src="imgs/new_x.png" alt="X"></img></span>';
        player1.push(parseInt(id));
        checkWin(player1, '1');
        player = 2;

        console.log(`Player 1: ${player1}`);


    // PLAYER 2
    } else {

        document.getElementById(cell).innerHTML = '<span><img class="icon" src="imgs/new_o.png" alt="O"></img></span>';
        player2.push(parseInt(id));
        checkWin(player2, '2');
        player = 1;

        console.log(`Player 2: ${player2}`);
    }
  
}

// Event Listeners
// document.getElementById("reset").addEventListener("click", reset);
document.getElementById("cell_1").addEventListener("click", function () { play(1, 'cell_1'); });
document.getElementById("cell_2").addEventListener("click", function () { play(2, 'cell_2'); });
document.getElementById("cell_3").addEventListener("click", function () { play(3, 'cell_3'); });
document.getElementById("cell_4").addEventListener("click", function () { play(4, 'cell_4'); });
document.getElementById("cell_5").addEventListener("click", function () { play(5, 'cell_5'); });
document.getElementById("cell_6").addEventListener("click", function () { play(6, 'cell_6'); });
document.getElementById("cell_7").addEventListener("click", function () { play(7, 'cell_7'); });
document.getElementById("cell_8").addEventListener("click", function () { play(8, 'cell_8'); });
document.getElementById("cell_9").addEventListener("click", function () { play(9, 'cell_9'); });

