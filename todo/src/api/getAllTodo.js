import axios from 'axios';

const getAllTodo = async () => {
  const data = [];
  const todos = await axios({
    method: 'get',
    url: 'http://localhost:3003/todo',
  }).then((response) => response.data);
  data.push(todos);
  return data;
};

export default getAllTodo;
