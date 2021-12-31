import gameStatusUpdate from '../../game/gameStatusUpdate';

const testGameObject = {
  firstPlayerObject: {
    status: {
      isWinner: false
    }
  },
  secondPlayerObject: {
    status: {
      isWinner: true
    }
  },
  status: {
    isTurn: 'secondPlayerObject',
    isWinner: null
  }
};

describe('gameStatusUpdate.isTurn', () => {
  test('return testGameObject with isTurn set to firstPlayerObject', () => {
    expect(gameStatusUpdate.isTurn(testGameObject)).toBe('firstPlayerObject');
  });

  test('return testGameObject with isTurn set to secondPlayerObject', () => {
    expect(gameStatusUpdate.isTurn(testGameObject)).toBe('secondPlayerObject');
  });
});

describe('gameStatusUpdate.isWinner', () => {
  test('check if firstPlayerObject or (secondPlayerObject) has won the game and set testGameObjects isWinner value to the winner', () => {
    expect(gameStatusUpdate.isWinner(testGameObject)).toBe(
      'secondPlayerObject'
    );
    expect(testGameObject.status.isWinner).toBe('secondPlayerObject');
  });

  test('check if (firstPlayerObject) or secondPlayerObject has won the game and set testGameObjects isWinner value to the winner', () => {
    testGameObject.firstPlayerObject.status.isWinner = true;
    testGameObject.secondPlayerObject.status.isWinner = false;

    expect(gameStatusUpdate.isWinner(testGameObject)).toBe('firstPlayerObject');
    expect(testGameObject.status.isWinner).toBe('firstPlayerObject');
  });
});
