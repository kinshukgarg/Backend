const express = require('express');
const app = express();
const fetchdata = require('../data.json');

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the mania</h1>');
});

app.get('/api/v1/query', (req, res) => {
    let sortedfetchdata = [...fetchdata]; // Used spread operator
    const { search } = req.query;
    if (search) {
        sortedfetchdata = sortedfetchdata.filter((product) => {
            return product.title.toLowerCase().startsWith(search.toLowerCase());
        });
    }
    const result = sortedfetchdata.map((product) => ({
        title: product.title,
        description: product.description,
        price: product.price
    }));
    res.json(result);
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
