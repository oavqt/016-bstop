const domQuery = {
  element: {
    content: () => {
      return document.querySelector('.content');
    },
    board: {
      main: () => {
        return document.querySelector('board__main');
      },
      secondary: () => {
        return document.querySelector('board__secondary');
      }
    }
  }
};

export default domQuery;
