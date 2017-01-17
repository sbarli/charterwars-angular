var mongoose = require("mongoose");
var Page = mongoose.model('Page');

module.exports.pagesGetAll = function(req, res) {
    
    res
        .status(200)
        .json({ "message":"You made it to pagesGetAll!" });

};

module.exports.pagesGetOne = function(req, res) {
    
    res
        .status(200)
        .json({ "message":"You made it to pagesGetOne!" });

};

module.exports.pagesPostOne = function(req, res){
    
    res
        .status(200)
        .json({ "message":"You made it to pagesPostOne!" });
    
    // if(!req.body.name){
    //     req.body.name = 'Anonymous';
    // }
    
    // var newPost = {
    //     name : req.body.name,
    //     answer : req.body.answer,
    //     question : req.body.question
    // };
    
    // console.log('newPost', newPost);
    
    // Post
    //     .create(newPost, function(err, post){
    //         var response = {
    //             status : 201,
    //             message : {}
    //         };
    //         if(err){
    //             response.status = 500;
    //             response.message = err;
    //         } else {
    //             response.message = post;
    //         }
    //         res
    //             .status(response.status)
    //             .json(response.message);
    //     });
};