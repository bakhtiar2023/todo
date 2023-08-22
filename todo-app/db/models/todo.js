const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class todo extends Model {
    static associate() {
    }
  }
  todo.init({
    title: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'todo',
  });
  return todo;
};
