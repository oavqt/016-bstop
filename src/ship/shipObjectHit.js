import pubsub from '../tools/pubsub';

function shipObjectHit(shipObject, coords) {
  const shipLayout = shipObject.layout;
  const index = shipLayout.findIndex((value) => value === coords);

  let result = 'coords not found';

  if (index >= 0) {
    shipLayout[index] = '[-][-]';
    result = 'success';
  }

  return result;
}

pubsub.subscribe('shipHit', shipObjectHit);

export default shipObjectHit;
