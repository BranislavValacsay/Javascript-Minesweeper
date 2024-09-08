# JavaScript Minesweeper

A simple implementation of the classic Minesweeper game created in JavaScript using HTML5 and CSS.

## Description

This project presents a basic version of Minesweeper, programmed in pure JavaScript. The game provides a classic Minesweeper experience directly in the web browser, featuring a 10x10 grid with 15 hidden mines.

## Features

- Classic Minesweeper gameplay
- 10x10 game board
- 15 randomly placed mines
- Scoring system
- Simple and intuitive user interface

## How to Play

- **Left Click**: Reveal a cell
- The number in a revealed cell indicates how many mines are in the adjacent cells
- Avoid clicking on cells containing mines
- The game ends when a mine is clicked

## Installation and Running

1. Clone this repository
2. Open the `index.html` file in your web browser

## Technologies

- HTML5
- JavaScript
- CSS3

## Project Structure

- `index.html`: Main HTML file containing the game board and score display
- `script.js`: JavaScript file with the complete game logic
- `style.css`: CSS file for styling the game board and cells

## Game Logic

- The game initializes with a 10x10 board and randomly places 15 mines
- Each cell, when clicked, reveals either a number (indicating adjacent mines) or a mine
- The player's score increases with each successfully revealed cell
- The game resets if a mine is clicked

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Contributing

Contributions to improve the game are welcome. Please feel free to fork the repository, make changes, and submit a pull request.

---

Created with ❤️ by Branislav Valacsay
