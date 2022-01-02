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
            gameController.get.secondPlayerObject().boardObject
          );

          pubsub.publish('firstPlayerObjectDOMBuildBoard', [
            'first',
            'firstPlayerObject',
            gameController.get.firstPlayerObject().boardObject.properties.size
          ]);

          pubsub.publish('secondPlayerObjectDOMBuildBoard', [
            'second',
            'secondPlayerObject',
            gameController.get.secondPlayerObject().boardObject.properties.size
          ]);
        }
      }
    }
  },
  get: {
    currentGameObject: () => {
      return game.current.storage;
    },
    firstPlayerObject: () => {
      return game.current.storage.firstPlayerObject;
    },
    secondPlayerObject: () => {
      return game.current.storage.secondPlayerObject;
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
        boardReceiveAttack(gameController.get[player](), coords);
      },
      gridPlace: (player, shipObjectType, coords, direction = 'left') => {
        boardGridPlace(
          gameController.get[player](),
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
            boardStatsUpdate.attempts(gameController.get[player](), value);
          },
          ships: (player, value) => {
            boardStatsUpdate.ships(gameController.get[player](), value);
          }
        }
      },
      ship: {
        objectHit: (player, coords) => {
          shipObjectHit(gameController.get[player](), coords);
        },
        objectSunk: (player, coords) => {
          shipObjectSunk(gameController.get[player](), coords);
        }
      },
      ai: {
        randomBoard: (player) => {
          aiRandomBoard(gameController.get[player]());
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
