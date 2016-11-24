/**
 * Module dependencies.
 */
var express = require("express"),
	bodyParser = require('body-parser'),
	path = require("path"),
	app = express(),
	router = express.Router(),
	config = require('./config/local');
	require('./routes')(router);
	
app.use(express.static(path.join(__dirname,'assets')));
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('.html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//server settings
app.use('/',router);
app.listen(config.port, function(){
	console.log("Server listening at http://localhost: "+config.port);
});