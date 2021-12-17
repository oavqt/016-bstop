import ship from './shipObject';
import isHit from './shipHit';
import isStatus from './shipStatus';

const build = (type = 'battleship', options = '') => {
  const base = ship[type]();
  const settings = { isHit, isStatus, ...options };

  return Object.assign(Object.create(settings), base);
};

export default build;
