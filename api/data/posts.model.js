var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
});

mongoose.model('Post', postSchema);