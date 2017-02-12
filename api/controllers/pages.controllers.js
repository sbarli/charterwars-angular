var mongoose = require("mongoose");
var Page = mongoose.model('Page');

module.exports.pagesGetAll = function(req, res) {
    
    Page
        .find()
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

module.exports.pagesGetOne = function(req, res) {
    
    var pageId = req.params.pageId;
    console.log('GET pageId', pageId);
    
    Page
        .findById(pageId)
        .exec(function(err, page){
            var response = {
                status : 200,
                message : page
            };
            if(err){
                response.status = 500;
                response.message = err;
            } else if(!page){
                response.status = 404;
                response.message = "Page ID not found";
            }
            res
                .status(response.status)
                .json(response.message);
        });

};

module.exports.sectionsGetAll = function(req, res) {
    var pageId = req.params.pageId;
    
    Page
        .findById(pageId)
        .select('sections')
        .exec(function(err, page){
            var response = {
                status : 200,
                message : []
            };
            if(err){
                console.log('error');
                response.status = 500;
                response.message = err;
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
                response.message = page.sections;
            }
            res
                .status(response.status)
                .json(response.message);
        });

};

var _addSection = function(req, res, page){
    page.sections.push({
        name : req.body.name,
        url : req.body.url,
        prompt : {
            question: req.body.question
        }
    });
    
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
            console.log("New Section Added!");
            response.message = updatedPage.sections[updatedPage.sections.length - 1];
        }
        res
            .status(response.status)
            .json(response.message);
        
    });
};

module.exports.sectionsAddOne = function(req, res){
    var pageId = req.params.pageId;
    
    Page
        .findById(pageId)
        .select('sections')
        .exec(function(err, page){
            var response = {
                status : 200,
                message : []
            };
            if(err){
                console.log('error');
                response.status = 500;
                response.message = err;
            } else if(!page){
                console.log('Page not found');
                response.status = 404;
                response.message = {
                    "message" : "Could not find page id: " + pageId
                };
            }
            if(page){
                _addSection(req,res,page);
            } else {
                res
                    .status(response.status)
                    .json(response.message);
            }
        });
};

module.exports.pagesPostOne = function(req, res){
    
    var newPage = {
        name : req.body.name
    };
    
    console.log('newPage', newPage);
    
    Page
        .create(newPage, function(err, page){
            var response = {
                status : 201,
                message : {}
            };
            if(err){
                response.status = 500;
                response.message = err;
            } else {
                response.message = page;
            }
            res
                .status(response.status)
                .json(response.message);
        });
};