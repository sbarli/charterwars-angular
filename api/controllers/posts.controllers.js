var mongoose = require("mongoose");
var Page = mongoose.model('Page');
var Post = mongoose.model('Post');

module.exports.postsGetAll = function(req, res) {
    
    Page
        .find()
        .populate("sections.prompt.responses")
        .exec(function(err, pages){
            var response = {
                status : 200,
                message : {}
            };
            if(err){
                response.status = 500;
                response.message = err;
            } else {
                response.message = pages;
            }
            res
                .status(response.status)
                .json(response.message);
        });

};

var _addPost = function(req, res, page, section){
    var newResponse = {
        name: req.body.name,
        answer: req.body.answer
    };
    
    console.log('newResponse', newResponse);
    
    Post
        .create(newResponse, function(err, response){
            if(err){
                console.log('error');
                res
                    .status(500)
                    .json(err);
            }else{
                console.log('Created Post!', response);
                section.prompt.responses.push(response);
                console.log('Pushed response to section', section);
                page.save(function(err, updatedPage){
                    var response = {
                        status : 201,
                        message : {}
                    };
                    if(err){
                        console.log('error');
                        response.status = 500;
                        response.message = err;
                    } else {
                        console.log("New Response Added!");
                        var updatedSection = updatedPage.sections.id(section.id);
                        response.message = updatedSection.prompt.responses[updatedSection.prompt.responses.length - 1];
                    }
                    res
                        .status(response.status)
                        .json(response.message);
                    
                });
            }
        });
    
    
    
};

module.exports.postsPostOne = function(req, res){
    
    var pageId = req.params.pageId;
    var sectionId = req.params.sectionId;
    
    Page
        .findById(pageId)
        .select('sections')
        .exec(function(pageErr, page){
            var response = {
                status : 200,
                message : []
            };
            if(pageErr){
                console.log('error');
                response.status = 500;
                response.message = pageErr;
            } else if(!page){
                console.log('Page not found');
                response.status = 404;
                response.message = {
                    "message" : "Could not find page id: " + pageId
                };
            } else if(page.sections.length < 1){
                console.log('No sections found');
                response.status = 404;
                response.message = {
                    "message" : "No sections found"
                };
            } else {
                var section = page.sections.id(sectionId);
                
                if(section){
                    _addPost(req,res,page,section);
                }else{
                    console.log('Section not found');
                    response.status = 404;
                    response.message = {
                        "message" : "Could not find section id: " + sectionId
                    };
                    res
                        .status(response.status)
                        .json(response.message);
                }
            }
        });
};