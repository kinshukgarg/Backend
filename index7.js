const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.send("hello kinshuk");
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname,'Home.html'));
});

app.get('/api', (req, res) => {
    res.sendFile(path.join(__dirname, 'fetchapi.html'));
});

