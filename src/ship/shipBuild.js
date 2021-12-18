import ship from './shipObject';
import isHit from './shipHit';
import isStatus from './shipStatus';

const build = (
  type = 'battleship',
  protoProperties = '',
  shipProperties = ''
) => {
  const base = ship[type](shipProperties);
  const customProtoProperties = { isHit, isStatus, ...protoProperties };

  return Object.assign(Object.create(customProtoProperties), base);
};

export default build;
