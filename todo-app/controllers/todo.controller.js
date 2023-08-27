const { validationResult } = require('express-validator');
const {
  databaseError, dataNotFound, duplicate, deleted, updated, created,
} = require('../global/response.message');
const {
  success, badRequest, serverError, notFound,
} = require('../global/response.status');
const TodoModel = require('../models/todo.model');

class TodoController {
  static getTodo = async (req, res) => {
    const data = await TodoModel.getAll();
    if (data === false) {
      res.status(serverError).json({ error: databaseError });
    } else if (data === null) {
      res.status(notFound).json({ error: dataNotFound });
    } else {
      res.status(success).send(data);
    }
  };

  static postTodo = async (req, res) => {
    const { title, completed } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = { [errors.array()[0].path]: errors.array()[0].msg };
      res.status(badRequest).send(error);
    } else {
      const response = await TodoModel.isDuplicate(title);
      if (response === true) {
        res.status(badRequest).send(duplicate);
      } else if (response === undefined) {
        res.status(serverError).send(databaseError);
      } else {
        const result = await TodoModel.create(title, completed);
        if (result === true) {
          res.status(success).send(created);
        } else {
          res.status(serverError).send(databaseError);
        }
      }
    }
  };

  static putTodo = async (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = { [errors.array()[0].path]: errors.array()[0].msg };
      res.status(badRequest).send(error);
    } else {
      const result = await TodoModel.isExist(id);
      if (result === true) {
        const data = await TodoModel.update(id, completed);
        if (data === true) {
          res.status(success).send(updated);
        } else {
          res.status(serverError).send(databaseError);
        }
      } else if (result === false) {
        res.status(notFound).send(dataNotFound);
      } else {
        res.status(serverError).send(databaseError);
      }
    }
  };

  static dropTodo = async (req, res) => {
    const { id } = req.params;
    const result = await TodoModel.isExist(id);
    if (result === undefined) {
      res.status(serverError).send(databaseError);
    } else if (result === false) {
      res.status(notFound).send(dataNotFound);
    } else {
      const data = await TodoModel.delete(id);
      if (data === true) {
        res.status(success).send(deleted);
      } else {
        res.status(serverError).send(databaseError);
      }
    }
  };
}

module.exports = TodoController;
