import React, { useState } from 'react';

const ToDo = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>To-Do App</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
