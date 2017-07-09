const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
	
const app = express();
app.set('view engine', 'ejs');

app.use(session({secret: 'lkjasldkjlaksjd098324lkjasdl0834'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/static/'));
app.set('views', __dirname + '/views/');

app.get('/', function(req, res){ 
    res.send("Hello Survey Form");
});

port=5000;
app.listen(port, function() {
    console.log("Listening on Port: ", port);
});
