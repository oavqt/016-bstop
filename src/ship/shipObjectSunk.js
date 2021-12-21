import pubsub from '../tools/pubsub';

function shipObjectSunk(shipObject) {
  const shipLayout = shipObject.layout;

  return shipLayout.every((item) => item === '[-][-]');
}

pubsub.subscribe('shipHit', shipObjectSunk);

export default shipObjectSunk;
