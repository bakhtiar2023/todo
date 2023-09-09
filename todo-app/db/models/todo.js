const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class todo extends Model {
    static associate() {
    }
  }
  todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'todo',
  });
  return todo;
};
