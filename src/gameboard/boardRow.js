import cell from './boardCell';

const row = (cellProperties = '') => {
  const array = [];

  for (let i = 0; i < 10; i += 1) {
    array.push(cell(cellProperties));
  }

  return array;
};

export default row;
