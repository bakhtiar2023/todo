const { todo } = require('../db/models');

class TodoModel {
  static getAll = async () => {
    try {
      const data = await todo.findAll({ order: [['id', 'ASC']], attributes: ['id', 'title', 'completed', 'createdAt', 'updatedAt'] });
      if (data?.length < 1) {
        return null;
      }
      return data;
    } catch (error) {
      return false;
    }
  };

  static isDuplicate = async (title) => {
    try {
      const data = await todo.findOne({ where: { title } });
      if (data?.dataValues.title === title) {
        return true;
      }
      return false;
    } catch (error) {
      return undefined;
    }
  };

  static isExist = async (id) => {
    try {
      const data = await todo.findOne({ where: { id } });
      if (data?.dataValues.id === parseFloat(id)) {
        return true;
      }
      return false;
    } catch (error) {
      return undefined;
    }
  };

  static create = async (title, completed) => {
    try {
      await todo.create({ title, completed });
      return true;
    } catch (error) {
      return false;
    }
  };

  static update = async (id, completed) => {
    try {
      await todo.update({ completed }, { where: { id } });
      return true;
    } catch (error) {
      return false;
    }
  };

  static drop = async (id) => {
    try {
      await todo.destroy({ where: { id } });
      return true;
    } catch (error) {
      return false;
    }
  };
}

module.exports = TodoModel;
