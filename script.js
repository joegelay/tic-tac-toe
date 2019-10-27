
const game = (() => { 
	let gameboard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	let totalMoves = 0;

	const switchTurn = () => {
		let temp = player1.turn;
		player1.turn = player2.turn;
		player2.turn = temp;
	};

	const checkWinner = () => {
		let gameWon = false;
		
		for (let i = 0; i < 9; i += 3) {
			if (gameboard[i] == gameboard[i + 1] && gameboard[i + 1] == gameboard[i + 2])
				gameWon = true;
		}

		for (let i = 0; i < 3; i++) {
			if (gameboard[i] == gameboard[i + 3] && gameboard[i + 3] == gameboard[i + 6])
				gameWon = true;
		}

		if (gameboard[0] == gameboard[4] && gameboard[4] == gameboard[8])
			gameWon = true;

		if (gameboard[2] == gameboard[4] && gameboard[4] == gameboard[6])
			gameWon = true;

		return gameWon;
	}

	return {gameboard, totalMoves, switchTurn, checkWinner}
})();