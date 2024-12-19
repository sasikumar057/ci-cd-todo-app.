const express = require('express');
const router = express.Router();

// Temporary in-memory data store for to-dos
let todos = [];

// GET all to-dos
router.get('/todos', (req, res) => {
  res.json(todos);
});

// POST a new to-do
router.post('/todos', (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// DELETE a to-do
router.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== id);
  res.status(200).json({ message: 'Todo deleted' });
});

module.exports = router;
