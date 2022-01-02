import boardObjectBuild from '../gameboard/boardObjectBuild';
import playerObjectBuild from '../player/playerObjectBuild';
import aiObjectBuild from '../ai/aiObjectBuild';
import gameObjectBuild from './gameObjectBuild';

const game = (() => {
  const current = {};

  const options = {
    default: {
      gameObjectType: 'computer',
      gameObjectProperties: {},
      gameObjectProtoProperties: {},
      columnLength: 10,
      rowLength: 10,
      boardObjectProperties: {},
      boardObjectProtoProperties: {},
      boardCellObjectProperties: {},
      boardCellObjectProtoProperties: {},
      playerObjectProperties: {},
      playerObjectProtoProperties: {},
      aiObjectProperties: {},
      aiObjectProtoProperties: {}
    },
    update(customOptions) {
      return { ...options.default, ...customOptions };
    }
  };

  function start(customOptions) {
    const settings = options.update(customOptions);

    const boardObject = boardObjectBuild(
      settings.columnLength,
      settings.rowLength,
      settings.boardObjectProperties,
      settings.boardObjectProtoProperties,
      settings.boardCellObjectProperties,
      settings.boardCellObjectProtoProperties
    );

    const playerObject = playerObjectBuild(
      boardObject,
      settings.playerObjectProperties,
      settings.playerObjectProtoProperties
    );

    const aiObject = aiObjectBuild(
      boardObject,
      settings.aiObjectProperties,
      settings.aiObjectProtoProperties
    );
    const firstPlayerObject = playerObject;
    const secondPlayerObject =
      settings.gameObjectType === 'computer' ? aiObject : playerObject;

    current.storage = gameObjectBuild(
      firstPlayerObject,
      secondPlayerObject,
      settings.gameObjectProperties,
      settings.gameObjectProtoProperties
    );
  }

  return { current, start, options };
})();

export default game;
