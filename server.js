/**
 * Module dependencies.
 */
var express = require("express"),
	bodyParser = require('body-parser'),
	path = require("path"),
	app = express(),
	router = express.Router(),
	http = require('http'),
	config = require('./config');
	require('./routes')(router);
	
app.use(express.static(path.join(__dirname,'assets')));
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('.html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//server settings
app.use('/',router);
const 	server = http.createServer(app) ,
		socket = require('socket.io')(server);
		require('./socket')(socket);

	server.listen(config.port, function(){
		console.log("App is running in enviornment:-", process.env.NODE_ENV);
		console.log("Server listening at http://localhost:"+config.port);
		console.log("Socket listening at http://localhost:"+config.port);
		console.log("Socket Media upload url is:"+config.mediaPath);
	});

module.exports = server ;
