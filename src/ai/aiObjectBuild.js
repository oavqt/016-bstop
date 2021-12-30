import aiObject from './aiObject';

const aiObjectBuild = (
  boardObject,
  aiObjectProperties = {},
  aiObjectProtoProperties = {}
) => {
  const base = aiObject(boardObject, aiObjectProperties);
  const protoProperties = { ...aiObjectProtoProperties };

  return Object.assign(Object.create(protoProperties), base);
};

export default aiObjectBuild;
