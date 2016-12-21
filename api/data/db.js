var mongoose = require("mongoose");
var ip = process.env.IP;
var dburl = 'mongodb://'+ip+':27017/charterwars';

mongoose.connect(dburl);

mongoose.connection.on('connected',function(){
    console.log('Mongoose connectd to ' + dburl);
});

mongoose.connection.on('disconnected',function(){
    console.log('Mongoose disconnected');
});

mongoose.connection.on('error',function(err){
    console.log('Mongoose connection error: ' + err);
});

process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log('Mongoose disconnected through app termination (SIGINT)');
        process.exit(0);
    });
});

process.on('SIGTERM', function(){
    mongoose.connection.close(function(){
        console.log('Mongoose disconnected through app termination (SIGTERM)');
        process.exit(0);
    });
});

process.once('SIGUSR2', function(){
    mongoose.connection.close(function(){
        console.log('Mongoose disconnected through app termination (SIGUSR2)');
        process.kill(process.pid, 'SIGUSR2');
    });
});

// BRING IN SCHEMAS AND MODELS
require("./users.model");