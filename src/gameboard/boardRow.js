import cell from './boardCell';

const row = (propertyName, rowProperties = '', cellProperties = '') => {
  const object = {
    [propertyName]: {},
    state: {
      active: true,
      empty: true
    },
    custom: { ...rowProperties }
  };

  for (let i = 0; i < 10; i += 1) {
    object[propertyName][i] = cell(cellProperties);
  }

  return object;
};

export default row;
