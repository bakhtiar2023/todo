import axios from 'axios';

const deleteTodo = async (todoId) => {
  try {
    axios({
      method: 'delete',
      url: `https://todo-two-silk.vercel.app/todo/${todoId}`,
    });
    return true;
  } catch (error) {
    return false;
  }
};

export default deleteTodo;
