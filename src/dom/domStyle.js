import domQuery from '../tools/domQuery';

import pubsub from '../tools/pubsub';

const domStyle = {
  add: {
    ship: ([boardObject, shipCoordinates]) => {
      shipCoordinates.forEach(([iY, iX]) => {
        const shipObjectType = boardObject.board[iY][iX].ship.type;
        const square = domQuery.element.board.grid.square(
          boardObject.properties.id,
          [iY, iX]
        );

        domStyle.option.ship(shipObjectType, square);
      });
    }
  },
  option: {
    ship: (shipObjectType, square) => {
      let run = true;

      switch (run) {
        case shipObjectType === 'Carrier':
          square.classList.add('--ship--a');
          run = false;
          break;
        case shipObjectType === 'Battleship':
          square.classList.add('--ship--b');
          run = false;
          break;
        case shipObjectType === 'Destroyer':
          square.classList.add('--ship--c');
          run = false;
          break;
        case shipObjectType === 'Submarine':
          square.classList.add('--ship--d');
          run = false;
          break;
        case shipObjectType === 'Patrol Boat':
          square.classList.add('--ship--e');
          run = false;
          break;
        default:
          square.classList.add('.--ship');
          run = false;
      }
    }
  }
};

pubsub.subscribe('boardGridPlaceDOMStyleAddShip', domStyle.add.ship);
