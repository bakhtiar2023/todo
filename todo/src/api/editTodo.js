import axios from 'axios';

const editTodo = async (values) => {
  try {
    await axios({
      method: 'put',
      url: `http://localhost:3003/todo/${values.id}`,
      data: values,
    });
    return true;
  } catch (error) {
    return false;
  }
};

export default editTodo;
