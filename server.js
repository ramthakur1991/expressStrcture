/**
 * Module dependencies.
 */
const 	express = require("express");
const 	bodyParser = require('body-parser');
const	path = require("path");
const	app = express();
const	router = express.Router();
const	http = require('http');
const	config = require('./config');
const 	server = http.createServer(app) ;
const	socket = require('socket.io')(server);

require('./routes')(router);
require('./socket')(socket);

/**
 *	Express framework settings 
 **/
app.use(express.static(path.join(__dirname,'assets')));
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('.html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/',router);

/**
 *	Server bootup section
 **/
server.listen(config.port, function(){
	console.log("Server listening at http://localhost:" + config.port);
	console.log("Socket server listening at http://localhost:"+ config.port);
});

module.exports = server ;
