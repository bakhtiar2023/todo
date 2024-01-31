import axios from 'axios';

const editTodo = async (values) => {
  try {
    await axios({
      method: 'put',
      url: `https://todo-two-silk.vercel.app/todo/${values.id}`,
      data: values,
    });
    return true;
  } catch (error) {
    return false;
  }
};

export default editTodo;
