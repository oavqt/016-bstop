import boardObjectBuild from '../gameboard/boardObjectBuild';
import playerObjectBuild from '../player/playerObjectBuild';
import aiObjectBuild from '../ai/aiObjectBuild';
import gameObjectBuild from './gameObjectBuild';

const game = (() => {
  const current = {};

  const options = {
    default: {
      gameObjectType: 'npc',
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

  function createPlayer(settings, player) {
    return (settings.gameObjectType === 'npc' && player === 'second') ||
      settings.gameObjectType === 'npcvnpc'
      ? aiObjectBuild(
          boardObjectBuild(
            settings.columnLength,
            settings.rowLength,
            settings.boardObjectProperties,
            settings.boardObjectProtoProperties,
            settings.boardCellObjectProperties,
            settings.boardCellObjectProtoProperties
          ),
          settings.aiObjectProperties,
          settings.aiObjectProtoProperties
        )
      : playerObjectBuild(
          boardObjectBuild(
            settings.columnLength,
            settings.rowLength,
            settings.boardObjectProperties,
            settings.boardObjectProtoProperties,
            settings.boardCellObjectProperties,
            settings.boardCellObjectProtoProperties
          ),
          settings.playerObjectProperties,
          settings.playerObjectProtoProperties
        );
  }

  function start(customOptions) {
    const settings = options.update(customOptions);

    const firstPlayerObject = createPlayer(settings, 'first');
    const secondPlayerObject = createPlayer(settings, 'second');

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
