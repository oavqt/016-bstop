const coordinates = (board) => {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  board.map((row) => {
    const first = board.indexOf(row);

    return row.map((cell) => {
      const second = row.indexOf(cell);

      const modified = cell;
      modified.coords.cell = `[${first}][${second}]`;
      modified.coords.display = `[${letters[first]}][${second}]`;

      return modified;
    });
  });

  return board;
};

export default coordinates;
