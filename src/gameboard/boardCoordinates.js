const boardCoordinates = (boardArray) => {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  boardArray.map((row) => {
    const first = boardArray.indexOf(row);

    return row.map((cell) => {
      const second = row.indexOf(cell);

      const modified = cell;
      modified.coords.cell = `[${first}][${second}]`;
      modified.coords.display = `[${letters[first]}][${second}]`;

      return modified;
    });
  });

  return boardArray;
};

export default boardCoordinates;
