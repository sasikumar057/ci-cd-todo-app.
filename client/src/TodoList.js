// src/TodoList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  // Fetch todos from the backend API
  useEffect(() => {
    axios.get('http://localhost:5000/api/todos')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => console.error('There was an error!', error));
  }, []);

  // Add a new todo
  const addTodo = () => {
    const newTodo = { task: task, completed: false };
    axios.post('http://localhost:5000/api/todos', newTodo)
      .then(response => {
        setTodos([...todos, response.data]); // Update UI with new todo
        setTask(''); // Clear the input field
      })
      .catch(error => console.error('There was an error adding the todo!', error));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input 
        type="text" 
        value={task} 
        onChange={e => setTask(e.target.value)} 
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add Task</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.task} {todo.completed ? '(Completed)' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
