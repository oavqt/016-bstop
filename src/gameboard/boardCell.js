import cellObject from './boardCellObject';

const cellBuild = (cellProperties = '', cellProtoProperties = '') => {
  const base = cellObject(cellProperties);
  const customProtoProperties = { ...cellProtoProperties };

  return Object.assign(Object.create(customProtoProperties), base);
};

export default cellBuild;
