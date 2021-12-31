import pubsub from '../tools/pubsub';

const gameStatusUpdate = {
  isTurn: (gameObject) => {
    const gameObjectStatus = gameObject.status;
    const { firstPlayerObject } = gameObject;
    const { secondPlayerObject } = gameObject;

    if (gameObjectStatus.isTurn === 'firstPlayerObject') {
      pubsub.publish('boardStatusUpdateIsTurn', [firstPlayerObject, false]);
      pubsub.publish('boardStatusUpdateIsTurn', [secondPlayerObject, true]);
      gameObjectStatus.isTurn = 'secondPlayerObject';
    } else {
      pubsub.publish('boardStatusUpdateIsTurn', [secondPlayerObject, false]);
      pubsub.publish('boardStatusUpdateIsTurn', [firstPlayerObject, true]);
      gameObjectStatus.isTurn = 'firstPlayerObject';
    }

    return gameObjectStatus.isTurn;
  },
  isWinner: (gameObject) => {
    const gameObjectStatus = gameObject.status;
    const { firstPlayerObject } = gameObject;
    const { secondPlayerObject } = gameObject;

    if (firstPlayerObject.status.isWinner === true) {
      gameObjectStatus.isWinner = 'firstPlayerObject';

      pubsub.publish('isWinnerDOM', gameObjectStatus.isWinner);
    } else if (secondPlayerObject.status.isWinner === true) {
      gameObjectStatus.isWinner = 'secondPlayerObject';

      pubsub.publish('isWinnerDOM', gameObjectStatus.isWinner);
    }

    return gameObjectStatus.isWinner;
  }
};

export default gameStatusUpdate;
