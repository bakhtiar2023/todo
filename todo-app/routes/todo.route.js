const express = require('express');
const todoController = require('../controllers/todo.controller');
const paramsChecker = require('../middleware/paramChecker');
const todoValidator = require('../validations/todo.validator');

const todoRouter = express.Router();

todoRouter.get('/todo', todoController.getTodo);
todoRouter.post('/todo', todoValidator.createValidRules(), todoController.postTodo);
todoRouter.put('/todo/:id', paramsChecker, todoValidator.updateValidRules(), todoController.putTodo);
todoRouter.delete('/todo/:id', paramsChecker, todoController.dropTodo);

module.exports = todoRouter;
