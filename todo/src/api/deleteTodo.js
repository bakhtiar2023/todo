import axios from 'axios';

const deleteTodo = async (todoId) => {
  try {
    axios({
      method: 'delete',
      url: `http://localhost:3003/todo/${todoId}`,
    });
    return true;
  } catch (error) {
    return false;
  }
};

export default deleteTodo;
