const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dbConnect = require('./Mongoose');
const UsersModel = require('./UsersSchema');

app.use(bodyParser.json());

dbConnect();

app.get('/list', async (req, resp) => {
    const data = await UsersModel.find();
    resp.send(data);
});

app.post('/data', async (req, resp) => {
    const user = new UsersModel(req.body);
    const result = await user.save();
    resp.send(result);
});

app.delete('/user/:id', async (req, resp) => {
    const result = await UsersModel.deleteOne({ _id: req.params.id });
    resp.send(result);
});

app.put('/update/:id', async (req, resp) => {
    const result = await UsersModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    resp.send(result);
});

app.listen(7500, () => {
    console.log('server started at 7500');
});
