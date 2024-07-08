var express = require('express');
var path = require('path');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// set the views directory
app.set('views', path.join(__dirname, 'views'));
 
// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    const user = {
        name: 'Rahul',
        email: 'rahul1234@gmail.com',
        city: 'Mohali',
        skills: ['React', 'Node', 'Tailwind']
    };
    res.render('profile', { user });
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080, function() {
    console.log('Server is listening on port 8080');
});
