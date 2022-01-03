require('./assets/css/index.css');
const domController = require('./dom/domController');
const gameController = require('./game/gameController');

domController.default.build.page();
gameController.default.create.game.type.npc();

if (module.hot) {
  module.hot.accept();

  const content = document.querySelector('.content');

  while (content.firstChild) content.removeChild(content.lastChild);

  domController.default.build.page();
  gameController.default.create.game.type.npc();
}
