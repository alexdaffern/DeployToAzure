const mongoose = require('mongoose');

//Gets access to the hobby model. 
const hobbyModel = mongoose.model('hobby');

const hobbyList = function (req, res) {
    hobbyModel.find({}, function(err, hobby){
		if(err){
			res
				.status(404)
				.json(err);
		}
   	 	else{
    	    res
				.status(200)
        	    .json(hobby);
   			 }

});};

const addHobby = function (req, res){
	res
		.status(201)
		.json({"Add hobby" : "work in progress"});
};

module.exports = {
	hobbyList,
	addHobby
}