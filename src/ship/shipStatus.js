function shipIsStatus() {
  return this.ship.every((item) => item === '[-][-]');
}

export default shipIsStatus;
