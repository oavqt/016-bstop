import aiRandomBoard from '../ai/aiRandomBoard';

import boardGridPlace from '../gameboard/boardGridPlace';
import boardReceiveAttack from '../gameboard/boardReceiveAttack';
import boardStatsUpdate from '../gameboard/boardStatsUpdate';

import game from './game';
import gameStatusUpdate from './gameStatusUpdate';

import pubsub from '../tools/pubsub';

import shipObjectBuild from '../ship/shipObjectBuild';
import shipObjectHit from '../ship/shipObjectHit';
import shipObjectSunk from '../ship/shipObjectSunk';

const gameController = {
  create: {
    game: {
      type: {
        computer: (customOptions) => {
          const computerOptions = {
            gameObjectType: 'computer',
            ...customOptions
          };

          game.start(computerOptions);

          pubsub.publish(
            'aiRandomBoard',
            gameController.get.playerObject('secondPlayerObject')
          );
        }
      }
    }
  },
  get: {
    currentGameObject: () => {
      return game.current;
    },
    playerObject: (player) => {
      return game.current[player];
    }
  },
  methods: {
    game: {
      status: {
        isWinner: (signal) => {
          if (signal) gameStatusUpdate(gameController.get.currentGame());
        }
      }
    },
    board: {
      receiveAttack: (player, coords) => {
        boardReceiveAttack(gameController.get.playerObject(player), coords);
      },
      gridPlace: (player, shipObjectType, coords, direction = 'left') => {
        boardGridPlace(
          gameController.get.playerObject(player),
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
            boardStatsUpdate.attempts(
              gameController.get.playerObject(player),
              value
            );
          },
          ships: (player, value) => {
            boardStatsUpdate.ships(
              gameController.get.playerObject(player),
              value
            );
          }
        }
      },
      ship: {
        objectHit: (player, coords) => {
          shipObjectHit(gameController.get.playerObject(player), coords);
        },
        objectSunk: (player, coords) => {
          shipObjectSunk(gameController.get.playerObject(player), coords);
        }
      },
      ai: {
        randomBoard: (player) => {
          aiRandomBoard(gameController.get.playerObject(player));
        }
      }
    }
  }
};

pubsub.subscribe(
  'gameStatusUpdateIsWinner',
  gameController.methods.game.status.isWinner
);

export default gameController;
