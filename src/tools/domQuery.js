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
      },
      grid: {
        square: (boardObjectID, coords) => {
          const [column, row] = coords;
          const squares = [
            ...document.querySelectorAll(`${boardObjectID}__grid .grid__square`)
          ];

          return squares.find(
            (square) =>
              square.dataset.column === column && square.dataset.row === row
          );
        }
      }
    }
  }
};

export default domQuery;
