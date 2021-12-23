const randomCoords = (min, max) => {
  const coordsY = Math.floor(Math.random() * (max - min + 1) + min);
  const coordsX = Math.floor(Math.random() * (max - min + 1) + min);

  return [coordsY, coordsX];
};

export default randomCoords;
