import shipObject from './shipObject';

const shipObjectBuild = (
  type = 'battleship',
  shipObjectProperties = '',
  shipObjectProtoProperties = ''
) => {
  const base = shipObject[type](shipObjectProperties);
  const customProtoProperties = { ...shipObjectProtoProperties };

  return Object.assign(Object.create(customProtoProperties), base);
};

export default shipObjectBuild;
