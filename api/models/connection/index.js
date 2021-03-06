var mongoose   	= require('mongoose'),
	config 		= require('../../../config'),
	dbName 		= null ;
switch(process.env.NODE_ENV){
	case "development":
		dbName =  config.dbNameDev ;
		break;
	case "production":
		dbName =  config.dbNameProd ;
		break;
	case "test":
		dbName = config.dbNameTest ;
		break;
	default:
		dbName = "drinker_default" ;
}
console.log("Connected Database is: ", `mongodb://localhost:27017/${dbName}`);
mongoose.connect(`mongodb://localhost:27017/${dbName}`); // connect to our database

module.exports = mongoose ;
