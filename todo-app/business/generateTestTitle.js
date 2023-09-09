const getRandomInt = require('./generateRandInt');

const words = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie faucibus nibh ut imperdiet. Nullam laoreet lobortis nunc non auctor. Vestibulum eu luctus ante. Nunc convallis fermentum nibh, a faucibus eros sollicitudin ac. Proin condimentum ante gravida, luctus quam non, porttitor orci. Suspendisse potenti. Aenean eu mauris aliquam, pharetra nulla.';

function generateTitle() {
  const wordArray = words.toLocaleLowerCase().split(/[\s,|.]+/);
  const title = wordArray[getRandomInt(0, wordArray.length + 1)];
  return title;
}

module.exports = generateTitle;
