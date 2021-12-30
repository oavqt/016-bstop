import shipObject from './shipObject';

const shipObjectBuild = (
  type = 'battleship',
  shipObjectProperties = {},
  shipObjectProtoProperties = {}
) => {
  const base = shipObject[type](shipObjectProperties);
  const protoProperties = { ...shipObjectProtoProperties };

  const shipObjectMerged = Object.assign(Object.create(protoProperties), base);

  return shipObjectMerged;
};

export default shipObjectBuild;
