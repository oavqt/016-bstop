const domQuery = {
  element: {
    content: () => {
      return document.querySelector('.content');
    },
    board: {
      first: () => {
        return document.querySelector('.board__first');
      },
      second: () => {
        return document.querySelector('.board__second');
      }
    }
  }
};

export default domQuery;
