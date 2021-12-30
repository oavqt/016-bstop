import boardGridPlace from '../gameboard/boardGridPlace';
import boardReceiveAttack from '../gameboard/boardReceiveAttack';
import boardStatsUpdate from '../gameboard/boardStatsUpdate';
import shipObjectBuild from '../ship/shipObjectBuild';
import shipObjectHit from '../ship/shipObjectHit';
import shipObjectSunk from '../ship/shipObjectSunk';
import game from './game';

const gameController = {
  create: {
    game: (customOptions) => {
      game.start(customOptions);
    }
  },
  get: {
    board: (player) => {
      return game.current[player].board;
    }
  },
  methods: {
    board: {
      receiveAttack: (player, coords) => {
        boardReceiveAttack(gameController.get.board(player), coords);
      },
      gridPlace: (player, shipObjectType, coords, direction = 'left') => {
        boardGridPlace(
          gameController.get.board(player),
          shipObjectBuild(shipObjectType),
          coords,
          direction
        );
      }
    },
    redundancy: {
      board: {
        statsUpdate: {
          attempts: (player, value) => {
            boardStatsUpdate.attempts(gameController.get.board(player), value);
          },
          ships: (player, value) => {
            boardStatsUpdate.ships(gameController.get.board(player), value);
          }
        }
      },
      ship: {
        objectHit: (player, coords) => {
          shipObjectHit(gameController.get.board(player), coords);
        },
        objectSunk: (player, coords) => {
          shipObjectSunk(gameController.get.board(player), coords);
        }
      }
    }
  }
};

export default gameController;
