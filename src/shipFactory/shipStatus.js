function isStatus() {
  return this.ship.every((item) => item === '--');
}

export default isStatus;
