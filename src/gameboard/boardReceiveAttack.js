function boardReceiveAttack(coordsY, coordsX) {
  const coords = `[${coordsY}][${coordsX}]`;

  this.board[coordsY][coordsX].vessel.shipIsHit(coords);
}

export default boardReceiveAttack;
