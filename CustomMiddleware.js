const express = require('express');
const app = express();

// Middleware to log request details
app.use((req, res, next) => {
    console.log(req.method, req.ip, req.hostname, new Date());
    next();
});

// Authentication middleware
const auth = (req, res, next) => {
    if (req.query.password === 'hello') {
        next();
    } else {
        res.sendStatus(404);
    }
};

// Route with authentication middleware
app.get('/', auth, (req, res) => {
    res.send('Hello, World!');
});
app.get('/home',(req,res)=>{
    res.send("wassup kinshuk ")
})
app.listen(9500, () => {
    console.log('Server is listening on port 9500');
});