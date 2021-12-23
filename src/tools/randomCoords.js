const randomCoords = ([firstMin, firstMax], [secondMin, secondMax]) => {
  const coordsY = Math.floor(Math.random() * (firstMax - firstMin) + firstMin);
  const coordsX = Math.floor(
    Math.random() * (secondMax - secondMin) + secondMin
  );

  return [coordsY, coordsX];
};

export default randomCoords;
