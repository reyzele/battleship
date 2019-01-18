export default {
  displayMessage: function(msg) {
    const message = document.getElementById("messageArea");

    message.innerHTML = msg;
  },

  displayHit: function(location) {
    const cell = document.getElementById(location);

    if (cell.classList.contains("hit")) {
      this.displayMessage("Oops, you already hit that location!");
    } else {
      cell.setAttribute("class", "hit");

      this.displayMessage("HIT!");
    }
  },

  displayMiss: function(location) {
    const cell = document.getElementById(location);

    if (cell.classList.contains("miss")) {
      this.displayMessage("You already shot here!");
    } else {
      cell.setAttribute("class", "miss");

      this.displayMessage("You missed.");
    }
  }
};
