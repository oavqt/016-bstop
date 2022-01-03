import shipObject from './shipObject';

import pubsub from '../tools/pubsub';
import '../tools/randomID';

const shipObjectBuild = (
  type = 'battleship',
  shipObjectProperties = {},
  shipObjectProtoProperties = {}
) => {
  const base = shipObject[type](shipObjectProperties);
  const protoProperties = { ...shipObjectProtoProperties };

  const shipObjectMerged = Object.assign(Object.create(protoProperties), base);

  pubsub.publish('shipObjectID', shipObjectMerged);

  return shipObjectMerged;
};

export default shipObjectBuild;
