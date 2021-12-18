function shipIsHit(coords) {
  const index = this.ship.findIndex((value) => value === coords);
  let result = 'coords not found';

  if (index >= 0) {
    this.ship[index] = '[-][-]';
    result = 'success';
  }

  return result;
}

export default shipIsHit;
