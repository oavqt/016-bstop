function boardReceiveAttack(coordsY, coordsX) {
  const cellObject = this.board[coordsY][coordsX];
  const coords = `[${coordsY}][${coordsX}]`;

  cellObject.selected = true;

  if (cellObject.vessel !== null) {
    this.properties.stats.attempts.hits += 1;
    this.properties.stats.attempts.total += 1;

    cellObject.status.hit = true;
    cellObject.vessel.shipIsHit(coords);
  } else {
    this.properties.stats.attempts.misses += 1;
    this.properties.stats.attempts.total += 1;

    cellObject.status.missed = true;
  }
}

export default boardReceiveAttack;
