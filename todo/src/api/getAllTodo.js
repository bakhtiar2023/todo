import axios from 'axios';

const getAllTodo = async () => {
  const data = [];
  const todos = await axios({
    method: 'get',
    url: 'https://todo-two-silk.vercel.app/todo',
  }).then((response) => response.data);
  data.push(todos);
  return data;
};

export default getAllTodo;
