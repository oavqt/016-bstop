import aiObject from './aiObject';

const aiObjectBuild = (
  boardObject,
  aiObjectProperties = {},
  aiObjectProtoProperties = {}
) => {
  const base = aiObject(boardObject, aiObjectProperties);
  const protoProperties = { ...aiObjectProtoProperties };

  const aiObjectMerged = Object.assign(Object.create(protoProperties), base);

  return aiObjectMerged;
};

export default aiObjectBuild;
