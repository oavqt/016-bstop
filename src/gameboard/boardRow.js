import cellBuild from './boardCell';

const rowBuild = (cellProperties = '') => {
  const array = [];

  for (let i = 0; i < 10; i += 1) {
    array.push(cellBuild(cellProperties));
  }

  return array;
};

export default rowBuild;
