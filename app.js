var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');

app.engine('.html',ejs.__express);
app.set('view engine', 'html');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
// app.use(logger(‘dev’));
app.use(bodyParser.json());
app.get('/',function(req,res) {

    res.render('exam', {
        // result: re
    });
});

app.post("/result", function(req, res){
    console.log(req.body);
    res.render('result', {
        name : req.body.username,
        xuehao : req.body.userxuehao,
        banji : req.body.userbanji,
        kemu : req.body.userkemu,
        score : req.body.userscore
    });
    res.end();
});

var server = app.listen(3000,function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listen at http://%s:%s' , host, port);
})
