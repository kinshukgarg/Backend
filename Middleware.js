const express = require('express');
const app = express();
const path = require('path');

const Filespath = path.join(__dirname, 'Files');
app.use(express.static(Filespath));

app.get('', (_, res) => {
    res.sendFile(`${Filespath}/Home.html`);
});

app.get('/api', (_, res) => {
    res.sendFile(`${Filespath}/index.html`);
});

app.listen(8500, () => {
    console.log('Server is listening on port 8500');
});

