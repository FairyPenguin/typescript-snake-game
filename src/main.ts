// Imports
import "./style.css";

//  Global selectors
// const snake = document.querySelector(".snake");
const gameBoard = document.querySelector(".game-board");
const food = document.querySelector(".food");
const score = document.querySelector(".score");
const highScore = document.querySelector(".high-score");

// Snake starting position [size]

let snake = [{ x: 10, y: 10 }];

// game-board (map) |  | => creating functin

function createBoard() {
  //   gameBoard?.innerHTML = "";
  if (gameBoard) {
    gameBoard.innerHTML = "";
  }

  createSnake();
  createFood();
}

createBoard();

//Snake creation func
function createSnake() {
  snake.forEach((part) => {
    const snakeElement = createGameElement("div", "snake");
    setSnakePosition(snakeElement, part);
  });
}

// set snake | food  position
function setSnakePosition(
  element: HTMLElement,
  position: { x: number; y: number }
) {
  element.style.gridColumn = position.x.toString();
  element.style.gridRow = position.y.toString();
}

// Create Snake | Food elemnt
function createGameElement(tag: string, className: string) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}
// Food creating func
function createFood() {}

console.log(snake);

console.log("Snake with Types");
