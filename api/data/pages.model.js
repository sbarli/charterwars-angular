var mongoose = require("mongoose");

var sectionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    prompt: {
        question: {
            type: String,
            required: true
        },
        responses: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Post"
            }
        ]
    }
});

var pageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sections: [sectionSchema]
});
    

mongoose.model('Page', pageSchema);