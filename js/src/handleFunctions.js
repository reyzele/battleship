import model from "./model";
import controller from "./controller";
import { init } from "./init";

function parseGuess(guess) {
  var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

  if (guess === null || guess.length !== 2) {
    alert("Oops, please enter a letter and a number on the board.");
  } else {
    var firstChar = guess.charAt(0);
    var row = alphabet.indexOf(firstChar);
    var column = guess.charAt(1);

    if (isNaN(row) || isNaN(column)) {
      alert("Oops, that isn't on the board.");
    } else if (
      row < 0 ||
      row >= model.boardSize ||
      column < 0 ||
      column >= model.boardSize
    ) {
      alert("Oops, that's off the board!");
    } else {
      return row + column;
    }
  }
  return null;
}

function handleFireButton(e) {
  e.preventDefault();

  var guessInput = document.getElementById("guessInput");
  var guess = guessInput.value.toUpperCase();
  var location = parseGuess(guess);

  controller.processGuess(location);

  guessInput.value = "";
}

function handleKeyPress(e) {
  var fireButton = document.getElementById("fireButton");

  if (e.keyCode === 13) {
    e.preventDefault();

    fireButton.click();
    return false;
  }
}

function handleRestart(e) {
  e.preventDefault();

  location.reload();
  init();
}

function handleClick(e) {
  controller.processGuess(e.target.id);
}

export {
  parseGuess,
  handleFireButton,
  handleKeyPress,
  handleRestart,
  handleClick
};
