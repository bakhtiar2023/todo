const express = require('express');
const todoRouter = require('./routes/todo.route');

const app = express();

app.use(express.json());
app.use('/', todoRouter);

module.exports = app;
