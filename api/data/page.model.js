var mongoose = require("mongoose");

var videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

var pageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    videos: [videoSchema]
});
    

mongoose.model('Page', pageSchema);