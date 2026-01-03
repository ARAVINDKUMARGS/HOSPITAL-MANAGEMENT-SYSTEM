const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURL = 'mongodb://localhost:27017/libraryDB';
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Book schema
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  category: String,
  publishedYear: Number,
  availableCopies: Number
});
const Book = mongoose.model('Book', bookSchema);

// CRUD routes (same as before)
// ... (you can copy the CRUD code from previous server.js)

// --- PORT SETUP ---
let PORT = 5000;

function startServer(port) {
  const server = app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
  });

  server.on('error', err => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is already in use. Trying port ${port + 1}...`);
      startServer(port + 1); // recursive retry on next port
    } else {
      console.error(err);
    }
  });
}

startServer(PORT);
