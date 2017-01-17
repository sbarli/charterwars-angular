var mongoose = require("mongoose");
var Post = mongoose.model('Post');

module.exports.postsGetAll = function(req, res) {
    
    res
        .status(200)
        .json({ "message":"You made it to postsGetAll!" });

};

module.exports.postsPostOne = function(req, res){
    
    if(!req.body.name){
        req.body.name = 'Anonymous';
    }
    
    var newPost = {
        name : req.body.name,
        answer : req.body.answer,
        question : req.body.question
    };
    
    console.log('newPost', newPost);
    
    Post
        .create(newPost, function(err, post){
            var response = {
                status : 201,
                message : {}
            };
            if(err){
                response.status = 500;
                response.message = err;
            } else {
                response.message = post;
            }
            res
                .status(response.status)
                .json(response.message);
        });
};