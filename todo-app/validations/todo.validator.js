const { body } = require('express-validator');
const {
  emptyTitle, formatTitle, formatCompleted, emptyCompleted,
} = require('../global/response.message');

class TodoValidator {
  static createValidRules = () => [
    body('title').notEmpty().withMessage(emptyTitle),
    body('completed').notEmpty().withMessage(emptyTitle),
    body('title').isString().withMessage(formatTitle),
    body('completed').isBoolean().withMessage(formatCompleted),
  ];

  static updateValidRules = () => [
    body('completed').notEmpty().withMessage(emptyCompleted),
    body('completed').isBoolean().withMessage(formatCompleted),
  ];
}

module.exports = TodoValidator;
