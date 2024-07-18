const express = require("express");
const router = express.Router();

// load book model
const Book = require("../../models/Book");

// test books route
router.get("/test", (req, res) => {
    res.send("book route testing!");
});

// get all books
router.get("/", (req, res) => {
    Book.find()
        .then((books) => {
            res.json(books);
        })
        .catch((err) => {
            res.status(404).json({ nobooksfound: "No books found" });
        });
});

// get single book by id
router.get("/:id", (req, res) => {
    Book.findById(req.params.id)
        .then((book) => {
            res.json(book);
        })
        .catch((err) => {
            res.status(404).json({ nobookfound: "No book found" });
        });
});

// add/save book
router.post("/", (req, res) => {
    Book.create(req.body).then((book) => {
        res.json({ msg: "Book added successfully" }).catch((err) => {
            res.status(400).json({ error: "Unable to add this book" });
        });
    });
});

// update book by id
router.put("/:id", (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then((book) => {
            res.json({ msg: "Book updated successfully" });
        })
        .catch((err) => {
            res.status(400).json({ errro: "Unable to updte the database" });
        });
});

// delete book by id
router.delete("/:id", (req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .then((book) => {
            res.json({ msg: "Book deleted successfully" });
        })
        .catch((err) => {
            res.status(404).json({ error: "No such a book" });
        });
});

module.exports = router;
