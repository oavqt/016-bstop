import pubsub from '../../tools/pubsub';

const testPubsubFunction = () => 'dark souls';
const testPubsubFunctionTwo = () => 'elden ring';

const testPubsubEvents = {
  testPubsubEvent: [testPubsubFunction]
};

const testPubsubEventsTwo = {
  testPubsubEvent: [testPubsubFunction, testPubsubFunctionTwo]
};

test('create a event property with an array object containing the function', () => {
  pubsub.subscribe('testPubsubEvent', testPubsubFunction);
  expect(pubsub.events).toStrictEqual(testPubsubEvents);
});

test('add function to the event property', () => {
  pubsub.subscribe('testPubsubEvent', testPubsubFunctionTwo);
  expect(pubsub.events).toStrictEqual(testPubsubEventsTwo);
});

test('remove the function from the event property', () => {
  pubsub.unsubscribe('testPubsubEvent', testPubsubFunctionTwo);
  expect(pubsub.events).toStrictEqual(testPubsubEvents);
});

test('event property functions are called with the data', () => {
  let testStringVariable;

  const testPubsubFunctionThree = (testString) => {
    testStringVariable = `${testString} harry potter`;
  };

  pubsub.subscribe('testPubsubEvent', testPubsubFunctionThree);
  pubsub.publish('testPubsubEvent', 'i hecking love');

  expect(testStringVariable).toBe('i hecking love harry potter');
});
