const mongoose =  require('mongoose');

const dbURL = 'mongodb://admin:H0bbies@ds024747.mblam.com:24748/mean-workshop';

mongoose.connect(dbURL);

//Connection status message
mongoose.connection.on('connected', function() {console.log('Mongoose connected to db'};
mongoose.connection.on('errror', function(err) {console.log('Mongoose connection error:', err};
mongoose.connection.on('disconnected', function() {console.log('Mongoose disconnected from db'};

require('./appSchemas');
