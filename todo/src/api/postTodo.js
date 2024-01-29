import axios from 'axios';

const postTodo = async (values) => {
  try {
    await axios({
      method: 'post',
      url: 'http://localhost:3003/todo',
      data: values,
    });
    return true;
  } catch (error) {
    return false;
  }
};

export default postTodo;
