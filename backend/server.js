const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Import routes
const todoRoutes = require('./routes/todoRoutes');

// Use routes
app.use('/api', todoRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
