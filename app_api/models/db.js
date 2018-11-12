const mongoose =  require('mongoose');

const dbURI = 'mongodb://admin:H0bbies@ds024748.mlab.com:24748/mean-workshop';

mongoose.connect(dbURI,{ useNewUrlParser: true });
//Connection status message
mongoose.connection.on('connected', function(){
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', function(err){
    console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', function(){
    console.log('Mongoose disconnected');
});

    require('./appSchemas');