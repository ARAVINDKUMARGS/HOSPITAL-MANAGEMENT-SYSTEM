// backend/routes/books.js
const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// CREATE
router.post('/', async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ all books
router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// READ by category
router.get('/category/:category', async (req, res) => {
  const books = await Book.find({ category: req.params.category });
  res.json(books);
});

// READ books after a specific year
router.get('/after/:year', async (req, res) => {
  const books = await Book.find({ publishedYear: { $gt: req.params.year } });
  res.json(books);
});

// UPDATE book
router.put('/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE book (only if availableCopies = 0)
router.delete('/:id', async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ error: "Book not found" });
  if (book.availableCopies > 0) return res.status(400).json({ error: "Cannot delete book with copies > 0" });

  await book.deleteOne();
  res.json({ message: "Book deleted" });
});

module.exports = router;
