import {
  handleFireButton,
  handleKeyPress,
  handleRestart,
  handleClick
} from "./handleFunctions";

import model from "./model";

function init() {
  const table = document.getElementById("table");
  const fireButton = document.getElementById("fireButton");
  const guessInput = document.getElementById("guessInput");
  const restartButton = document.getElementById("restartButton");

  table.addEventListener("click", handleClick);
  fireButton.addEventListener("click", handleFireButton);
  guessInput.addEventListener("keypress", handleKeyPress);
  restartButton.addEventListener("click", handleRestart);

  model.generateShipLocations();

  console.log(model.ships);
}

export { init };
