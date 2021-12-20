const boardCoordinates = (boardObject) => {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  boardObject.board.map((row) => {
    const first = boardObject.board.indexOf(row);

    return row.map((cell) => {
      const second = row.indexOf(cell);

      const modified = cell;
      modified.coords.cell = `[${first}][${second}]`;
      modified.coords.display = `[${letters[first]}][${second}]`;

      return modified;
    });
  });

  return boardObject;
};

export default boardCoordinates;
