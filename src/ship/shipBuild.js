import shipObject from './shipObject';
import shipIsHit from './shipHit';
import shipIsStatus from './shipStatus';

const shipBuild = (
  type = 'battleship',
  shipProperties = '',
  shipProtoProperties = ''
) => {
  const base = shipObject[type](shipProperties);
  const customProtoProperties = {
    shipIsHit,
    shipIsStatus,
    ...shipProtoProperties
  };

  return Object.assign(Object.create(customProtoProperties), base);
};

export default shipBuild;
