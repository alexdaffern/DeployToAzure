const mongoose = require('mongoose');

//Gets access to the class model. 
const classModel = mongoose.model('class');

const classList = function (req, res) {
    classModel.find({}, function(err, classes){
        if(err){
            res
                .status(404)
                .json(err);
        }
        else{
            res
                .status(200)
                .json(classes);
        }

    });};

const addClass = function (req, res){
    res
        .status(201)
        .json({"Add class" : "work in progress"});
};

module.exports = {
    classList,
    addClass
}