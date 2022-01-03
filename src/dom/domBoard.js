import domElement from './domElement';

const domBoard = (position, boardObjectID, columnLength, rowLength) => {
  const boardGridElement = domElement.create('div', {
    class: `${boardObjectID}__grid --grid`
  });

  const buttonGridSquareSize = position === 'first' ? '--small' : '--large'; // Temporary

  for (let iColumn = 0; iColumn < columnLength; iColumn += 1) {
    for (let iRow = 0; iRow < rowLength; iRow += 1) {
      const gridSquareElement = domElement.create('button', {
        class: `button--grid__square ${buttonGridSquareSize}`,
        'data-board': boardObjectID,
        'data-column': iColumn,
        'data-row': iRow
      });

      boardGridElement.appendChild(gridSquareElement);
    }
  }

  return boardGridElement;
};

export default domBoard;
