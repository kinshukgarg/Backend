const express=require('express')
const app=express()

const task = (req, res, next) => {
    if (!req.query.country) {
        res.send("Please enter your country");
    } else if (req.query.country === 'india') {
        res.send("You are in the right place");
    } else if (req.query.country === 'usa') {
        res.send("You are traveling to USA");
    } else {
        res.send("Access denied");
    }
};

app.use(task);

app.get('/', (req, res) => {
    res.send("Welcome home ");
});

app.listen(9500, () => {
    console.log('Server is listening on port ');
});