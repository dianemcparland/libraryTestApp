/**
 * Created by N0134511 on 11/29/2016.
 */
var express = require('express');
var portGitHub = 6000;

var app = express();
var port = process.env.port || 5000;
var nav = [{
    Link:'/Books', Text:'Book'}, {Link:'/Authors', Text: 'Author'}];

var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);

var github = 'higithub';
app.use(express.static('public'));
app.set('views', 'src/views');

app.set('view engine', 'ejs');


app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);
app.get('/', function(req, res) {
    res.render('index', {
        title: 'Hello from render',
        nav: [{Link:'/Books', Text:'Books'}, {Link:'/Authors', Text: 'Authors'}]});
});

app.get('/books', function(req, res) {
    res.send('hello books');

});

app.listen(port,function(err) {
    console.log('running server on port ' + port);
});

