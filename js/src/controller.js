import model from "./model";
import view from "./view";
import { handleClick } from "./handleFunctions";

export default {
  guesses: 0,

  processGuess: function(location) {
    if (location) {
      this.guesses++;
      const viewGuesses = document.querySelector("#numberGuesses");

      viewGuesses.innerHTML = "Guesses: " + this.guesses;

      var hit = model.fire(location);

      if (hit && model.shipsSunk === model.numShips) {
        const guessInput = document.getElementById("guessInput");
        const fireButton = document.getElementById("fireButton");
        const table = document.getElementById("table");

        view.displayMessage(
          "You sank all my battleships, in " + this.guesses + " guesses"
        );
        fireButton.style.display = "none";
        guessInput.setAttribute("disabled", true);
        table.removeEventListener("click", handleClick);
      }
    }
  }
};
