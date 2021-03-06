var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var user = require('./mongodb.js');



function logger(req, res, next) {
    console.log(new Date(), req.method, req.url)
    next();
}



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);
app.use(express.static('www'))

app.get('/users', user.findAll);
app.get('/users/search', user.findByname);
app.get('/users/role/:role', user.findByrole);
app.get('/users/salarySearch', user.searchSalary);
// searchSalary
app.listen(3000);
console.log('Server is running at http://localhost:3000');