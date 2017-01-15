var mongoose = require("mongoose");
var Post = mongoose.model('Post');

module.exports.postsGetAll = function(req, res) {
    
    res
        .status(200)
        .json({ "message":"You made it to postsGetAll!" });
    
    // console.log('registering user');
    // var newUser = {};
    //     newUser.username = req.body.username;
    //     newUser.name = req.body.name || null;
    //     newUser.password = req.body.password;
        
    // User.create({
    //     username: newUser.username,
    //     name: newUser.name,
    //     password: bcrypt.hashSync(newUser.password, bcrypt.genSaltSync(10))
    // }, function(err, user){
    //     if(err){
    //         console.log(err);
    //         res.status(400).json(err);
    //     }else{
    //         console.log('user created', user);
    //         res.status(201).json(user);
    //     }
    // });
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