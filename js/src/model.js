import view from "./view";

export default {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0, //кол-во сбитых кораблей

  ships: [
    { locations: [], hits: [] },
    { locations: [], hits: [] },
    { locations: [], hits: [] }
  ],

  fire: function(guess) {
    for (let i = 0; i < this.numShips; i++) {
      const ship = this.ships[i];
      const index = ship.locations.indexOf(guess);

      if (index >= 0) {
        ship.hits[index] = "hit";
        view.displayHit(guess);

        if (this.isSunk(ship)) {
          view.displayMessage("You sank my battleship!");
          this.shipsSunk++;
        }
        
        return true;
      }
    }

    view.displayMiss(guess);

    return false;
  },

  isSunk: function({ hits }) {
    for (let i = 0; i < this.shipLength; i++) {
      if (hits[i] !== "hit") {
        return false;
      }
    }

    return true;
  },

  generateShipLocations: function() {
    let locations;

    for (let i = 0; i < this.numShips; i++) {
      do {
        locations = this.generateShip();
      } while (this.collision(locations));
      this.ships[i].locations = locations;
    }
    for (let i = 0; i < this.ships.length; i++) {}
  },

  generateShip: function() {
    const newShipLocations = [];
    const direction = Math.floor(Math.random() * 2); // решает будет ли корабль расположен по вертикали или по горезонтали
    let row, col;

    if (direction) {
      // horizontal
      row = Math.floor(Math.random() * this.boardSize); // от 0 до 6
      col = Math.floor(
        Math.random() * (this.boardSize - this.shipLength + 1) // от 0 до 5
      );
    } else {
      // vertical
      row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
      col = Math.floor(Math.random() * this.boardSize);
    }

    for (var i = 0; i < this.shipLength; i++) {
      if (direction) {
        newShipLocations.push(row + "" + (col + i));
      } else {
        newShipLocations.push(row + i + "" + col);
      }
    }

    return newShipLocations;
  },

  collision: function(locations) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];

      for (var j = 0; j < locations.length; j++) {
        if (ship.locations.indexOf(locations[j]) >= 0) {
          return true;
        }
      }
    }

    return false;
  }
};
