var mongoose = require("mongoose");

// var dburl = 'mongodb://samantha:psych-preclude-sobriety-farrow@ds153659.mlab.com:53659/charterwars';

console.log(process.env.DATABASEURL);
var dburl = process.env.DATABASEURL;

// ~~~ Local dburl ~~~
// var dburl = 'mongodb://localhost:27017/charterwars';


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
require("./posts.model");
require("./pages.model");