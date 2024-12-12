# Tic Tac Toe Game

Welcome to the Tic Tac Toe Game, a simple yet engaging implementation of the classic game built using React.js. This project showcases a fun, interactive, and functional game board that allows two players to compete in the timeless battle of Xs and Os.

## Features

- **Interactive Game Board**: Players can take turns clicking on the board to place their respective symbols (X or O).
- **Win Detection**: The game automatically detects winning conditions (rows, columns, and diagonals) and displays a congratulatory message for the winner.
- **Restart Button**: Players can restart the game anytime to clear the board and play again.
- **Lock Mechanism**: Prevents further moves once a winner is declared.

## How It Works

1. The game board consists of a 3x3 grid.
2. Players take turns placing their symbol (❌ for Player 1 and 🔵 for Player 2) by clicking on an empty cell.
3. The game checks for a winner after every move. Winning conditions include:
   - Three consecutive symbols in a row
   - Three consecutive symbols in a column
   - Three consecutive symbols diagonally
4. When a player wins, the board is locked, and a congratulatory message is displayed.
5. Players can click the **Restart** button to reset the game.

## Technologies Used

- **React.js**: For building the user interface and managing state.
- **CSS**: For styling the game board and layout.

## File Structure

.
├── src
│ ├── components
│ │ ├── tictactoe
│ │ │ ├── TicTac.js // Main game component
│ │ │ └── TicTac.css // Styling for the game board
│ ├── assets
│ │ ├── circle.png // Icon for Player 2 (O)
│ │ └── cross.png // Icon for Player 1 (X)
│ └── index.js // Entry point of the application
├── public
│ └── index.html // Main HTML file
├── package.json
└── README.md

## How To Play

1. Click on an empty box to place your symbol (X or O).
2. Alternate turns between players.
3. Watch for a winner—a row, column, or diagonal of the same symbol wins the game!.
4. Click the Restart button to play again.

## Acknowledgments

- [React.js Documentation](https://react.dev/learn): For comprehensive guides and examples.
