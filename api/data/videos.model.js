var mongoose = require("mongoose");

var videoSchema = new mongoose.Schema({
    url: {
        type: String,
        unique: true,
        required: true
    }
});

mongoose.model('Video', videoSchema);