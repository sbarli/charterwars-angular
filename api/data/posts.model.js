var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
    name: {
        type: String
    },
    answer: {
        type: String,
        required: true
    },
    question: {
        type: Number,
        required: true
    }
});

mongoose.model('Post', postSchema);