import cell from './boardCell';

const row = (identifier, rowProperties = '', cellProperties = '') => {
  const object = {
    [identifier]: {},
    state: {
      active: true,
      empty: true
    },
    custom: { ...rowProperties }
  };

  for (let i = 0; i < 10; i += 1) {
    object[identifier][i] = cell(cellProperties);
  }

  return object;
};

export default row;
