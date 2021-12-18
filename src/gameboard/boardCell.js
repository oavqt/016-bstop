import cellObject from './boardCellObject';
import cellPlace from './boardCellProto';

const cellBuild = (cellProperties = '', cellProtoProperties = '') => {
  const base = cellObject(cellProperties);
  const customProtoProperties = { cellPlace, ...cellProtoProperties };

  return Object.assign(Object.create(customProtoProperties), base);
};

export default cellBuild;
