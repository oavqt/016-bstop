import shipObject from './shipObject';

const shipObjectBuild = (
  type = 'battleship',
  shipObjectProperties = {},
  shipObjectProtoProperties = {}
) => {
  const base = shipObject[type](shipObjectProperties);
  const protoProperties = { ...shipObjectProtoProperties };

  return Object.assign(Object.create(protoProperties), base);
};

export default shipObjectBuild;
