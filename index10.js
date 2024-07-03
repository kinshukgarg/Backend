const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: false }));

// Initial data
let record = [
    { id: 1, title: 'Book 1', author: '007' },
    { id: 2, title: 'Book 2', author: 'James Bond' },
];

// Route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index10.html'));
});

// Route to get the data
app.get('/data', (req, res) => {
    res.json(record);
});

// Route to get the table HTML
app.get('/table', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'table.html'));
});

// Route to add a new book
app.post('/library', (req, res) => {
    const Book = {
        id: record.length + 1,
        title: req.body.title,
        author: req.body.author,
    };
    record.push(Book);
    res.status(201).json(Book);
});

app.listen(5800, () => {
    console.log("server started at 5800")
});
