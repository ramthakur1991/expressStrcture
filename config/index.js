const config = function() {
	this.dbNameDev  = "" ;
	this.dbNameProd = "" ;
	this.dbNameTest = "";
	this.port	= 3000 ;
	this.mediaPath	= "http://hosturl.com:"+ this.port ;
};

module.exports = new config() ;
