import boardObjectBuild from '../gameboard/boardObjectBuild';
import playerObjectBuild from '../player/playerObjectBuild';
import aiObjectBuild from '../ai/aiObjectBuild';
import gameObjectBuild from './gameObjectBuild';

const game = (() => {
  let current = {};

  const options = {
    default: {
      gameObjectType: 'computer',
      gameObjectProperties: {},
      gameObjectProtoProperties: {},
      gridLength: 10,
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
    const settings = options(customOptions);

    const boardObject = boardObjectBuild(
      settings.gridLength,
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

    current = gameObjectBuild.type[settings.gameObjectType](
      playerObject,
      aiObject,
      settings.gameObjectProperties,
      settings.gameObjectProtoProperties
    );
  }

  return { current, start, options };
})();

export default game;
