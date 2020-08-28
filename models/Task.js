const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Tasks', TaskSchema)