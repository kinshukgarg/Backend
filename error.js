const express = require('express');
const app = express();
const phone = require('../');


// Home route
app.get('/', (req, res) => {
    res.send('<h1>HOME PAGE</h1>');
});

// API route
app.get('/api', (req, res) => {
    let sortedPhone = [...phone]; // spread operator
    const { search } = req.query;
    if (search) {
        sortedPhone = sortedPhone.filter((product) => {
            return product.title.toLowerCase().startsWith(search.toLowerCase());
        });
    }
    res.json(sortedPhone);
});

// Start the server
app.listen(5900, () => {
    console.log('Server is running on port 5900');
});
