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
	hobbyModel.create(req.body, function (err, newHobby) {
		if(err){
			res.status(400).json(err);
		}else{
			res.status(201).json(newHobby);
		}
    })
};

module.exports = {
	hobbyList,
	addHobby
}