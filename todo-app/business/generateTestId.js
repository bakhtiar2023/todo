const { getAll } = require('../models/todo.model');
const getRandomInt = require('./generateRandInt');

const generateNotFinishedId = async () => {
  const arrData = await getAll();
  const arrId = [];
  arrData.map((data) => {
    if (data.completed === true) {
      return null;
    }
    return arrId.push(data.id);
  });
  return arrId[getRandomInt(0, arrId.length + 1)];
};

const generateRandomIdFromDb = async () => {
  const arrData = await getAll();
  const arrId = [];
  arrData.map((data) => arrId.push(data.id));
  return arrId[getRandomInt(0, arrId.length + 1)];
};

module.exports = { generateNotFinishedId, generateRandomIdFromDb };
