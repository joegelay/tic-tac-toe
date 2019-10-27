let gameboard = ["", "", "", "", "", "", "", "", ""];
let turn = "X";
let playerXScore = 0;
let playerOScore = 0;
let winner = "";
const xScore = document.getElementById("playerXScore")
const oScore = document.getElementById("playerOScore")
const newGame = document.getElementById("newGame");
const winMessage = document.getElementById("winMessage")
const squares = document.querySelectorAll(".square");
const winningBoards = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

console.log(squares[1]);

function switchTurn() {
	if (turn == "X") {
		turn = "O"
	} else {
		turn = "X"
	}
}

squares.forEach(square => {
	square.addEventListener('click', () => {
		if (turn === "X" && !square.innerHTML && winner == "") {
			square.innerHTML = "X";
			gameboard[square.id] = square.innerHTML;
			switchTurn();
			checkForWinner();
		} else {
			if (!square.innerHTML && !square.innerHTML && winner == "") {
				square.innerHTML = "O";
				gameboard[square.id] = square.innerHTML;
				switchTurn();
				checkForWinner();
			};
		};
	});
});

function checkForWinner() {
	for (i = 0; i < winningBoards.length; i++) {
		if (gameboard[winningBoards[i][0]] == "X" && gameboard[winningBoards[i][1]] == "X" && gameboard[winningBoards[i][2]] == "X") {
			playerXScore += 1;
			xScore.innerHTML = `Player X Score: ${playerXScore}`;
			gameboard = ["", "", "", "", "", "", "", "", ""];
			winner = "X";
			winMessage.innerHTML = `Player ${winner} Wins!`;
			winStyle();

		} else if (gameboard[winningBoards[i][0]] == "O" && gameboard[winningBoards[i][1]] == "O" && gameboard[winningBoards[i][2]] == "O") {
			playerOScore += 1;
			oScore.innerHTML = `Player O Score: ${playerOScore}`;
			gameboard = ["", "", "", "", "", "", "", "", ""];
			winner = "O";
			winMessage.innerHTML = `Player ${winner} Wins!`;
			winStyle();

		} else if (!gameboard.includes("")) {
			winMessage.innerHTML = "Tie!";
		}
	};
};

function endGame() {
	squares.forEach(square => {
		square.innerHTML = "";
		gameboard = ["", "", "", "", "", "", "", "", ""];
		turn = "X";
		winner = "";
		winMessage.innerHTML = "";
		square.style = "color: black";
	});
};

newGame.addEventListener('click', () => {
	endGame();
})

function winStyle() {
	squares[winningBoards[i][0]].style = "color: red";
	squares[winningBoards[i][1]].style = "color: red";
	squares[winningBoards[i][2]].style = "color: red";
};