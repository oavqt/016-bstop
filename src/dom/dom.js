import domElement from './domElement';

const dom = {
  build: {
    skeleton: () => {
      const page = domElement.create(
        'div',
        {
          class: 'content__container'
        },
        domElement.create(
          'div',
          { class: 'container__left' },
          domElement.create('div', { class: 'left__portrait' })
        ),
        domElement.create(
          'div',
          { class: 'container__middle' },
          domElement.create(
            'div',
            { class: 'middle__information' },
            domElement.create('div', { class: 'information__board' }),
            domElement.create('div', { class: 'information__turn' })
          ),
          domElement.create(
            'div',
            { class: 'middle__board' },
            domElement.create('div', { class: 'board__first' }),
            domElement.create('div', { class: 'board__second' })
          ),
          domElement.create('div', { class: 'middle__tooltip' }),
          domElement.create('button', { class: 'button--tooltip' })
        ),
        domElement.create(
          'div',
          { class: 'container__right' },
          domElement.create(
            'div',
            { class: 'right__option' },
            domElement.create('button', { class: 'button--option' })
          ),
          domElement.create('div', { class: 'right__ships' }),
          domElement.create('div', { class: 'right__portrait' })
        )
      );

      return page;
    },
    board: (gridName, columnLength, rowLength) => {
      const boardGridElement = domElement.create('div', {
        class: `${gridName}__grid --grid`
      });

      const buttonGridSquareSize =
        gridName === 'firstPlayerObject' ? '--small' : '--large'; // Temporary

      for (let iColumn = 0; iColumn < columnLength; iColumn += 1) {
        for (let iRow = 0; iRow < rowLength; iRow += 1) {
          const gridSquareElement = domElement.create('button', {
            class: `button--grid__square ${buttonGridSquareSize}`,
            'data-board': gridName,
            'data-column': iColumn,
            'data-row': iRow
          });

          boardGridElement.appendChild(gridSquareElement);
        }
      }

      return boardGridElement;
    }
  }
};

export default dom;
