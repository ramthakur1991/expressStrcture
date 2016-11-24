var UserController = require('../api/controller/UserController');
module.exports = function(router){

	router.get('/',function(req,res){
		res.render('index');
	});

	router.post('/api/registration', function(req, res){
		return UserController.register(req, res);
	});
};