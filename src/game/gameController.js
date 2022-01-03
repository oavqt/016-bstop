import aiRandomBoard from '../ai/aiRandomBoard';

import boardGridPlace from '../gameboard/boardGridPlace';
import boardReceiveAttack from '../gameboard/boardReceiveAttack';
import boardStatsUpdate from '../gameboard/boardStatsUpdate';

import game from './game';

import shipObjectBuild from '../ship/shipObjectBuild';
import shipObjectHit from '../ship/shipObjectHit';
import shipObjectSunk from '../ship/shipObjectSunk';

import pubsub from '../tools/pubsub';
import '../dom/domController';

const gameController = {
  create: {
    game: {
      type: {
        npc: (customOptions) => {
          const computerOptions = {
            gameObjectType: 'npc',
            ...customOptions
          };

          game.start(computerOptions);

          pubsub.publish(
            'aiRandomBoard',
            gameController.get.secondPlayerObject().boardObject
          );

          pubsub.publish('firstPlayerObjectDOMBuildBoard', [
            'first',
            gameController.get.firstPlayerObject().boardObject
          ]);

          pubsub.publish('secondPlayerObjectDOMBuildBoard', [
            'second',
            gameController.get.secondPlayerObject().boardObject
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
    game: {},
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

export default gameController;
