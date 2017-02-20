var mongoose = require("mongoose");

var sectionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video"
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