const express = require('express');
const cors = require('cors');
const todoRouter = require('./routes/todo.route');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', todoRouter);

module.exports = app;
