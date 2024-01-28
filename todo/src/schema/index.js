/* eslint-disable import/no-extraneous-dependencies */
import * as yup from 'yup';

const todoSchema = yup.object().shape({
  title: yup
    .string()
    .required('title should not empty')
    .min(3, 'title too short')
    .max(100, 'title too long, maximum 100 character'),
  completed: yup
    .boolean()
    .required('completed should choose'),
});

export default todoSchema;
