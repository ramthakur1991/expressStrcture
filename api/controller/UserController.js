var User = require('../models/User'),
	Service = require('../service') ,
	_ = require('lodash');
	
module.exports = {
	register : function(req, res){
		var obj = new User();
		obj.name = "Ram" ;
		obj.profilePic = "http://abc.com" ;
		obj.phoneNumber = "7696016749";
		obj.deviceId = "asdsadaqwd7qw908d7890qwd70qwd70qwdqwd0qw9d890qwd";
		obj.deviceType = "android";
		
		obj.save(function(err, isSaved){
			console.log(err, isSaved);
			return res.status(200).json(obj);
		});
	}
};
