import axios from 'axios';

const postTodo = async (values) => {
  try {
    await axios({
      method: 'post',
      url: 'https://todo-two-silk.vercel.app/todo',
      data: values,
    });
    return true;
  } catch (error) {
    return false;
  }
};

export default postTodo;
