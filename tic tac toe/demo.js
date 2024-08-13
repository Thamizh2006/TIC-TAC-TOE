let currentPlayer = 'X';
   let moves = 0;
   let gameActive = true;
   const winningConditions = [
       [0, 1, 2],
       [3, 4, 5],
       [6, 7, 8],
       [0, 3, 6],
       [1, 4, 7],
       [2, 5, 8],
       [0, 4, 8],
       [2, 4, 6]
   ];
   let board = ['', '', '', '', '', '', '', '', ''];
   
   function playerMove(cellIndex) {
       if (!gameActive || board[cellIndex] !== '') return;
   
       board[cellIndex] = currentPlayer;
       document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
       moves++;
   
       if (checkWin()) {
           document.getElementById('status').innerText = `Player ${currentPlayer} wins!`;
           gameActive = false;
       } else if (moves === 9) {
           document.getElementById('status').innerText = "It's a draw!";
           gameActive = false;
       } else {
           currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
           document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
       }
   }
   
   function checkWin() {
       for (let condition of winningConditions) {
           let [a, b, c] = condition;
           if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
               return true;
           }
       }
       return false;
   }
   
   function resetGame() {
       currentPlayer = 'X';
       moves = 0;
       gameActive = true;
       board = ['', '', '', '', '', '', '', '', ''];
   
       let cells = document.getElementsByClassName('cell');
       for (let cell of cells) {
           cell.innerText = '';
       }
   
       document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
   }
    "WEDS Janalakshmi"
