const mongoose = require('mongoose');

const techSchema = new mongoose.Schema({
    techStack : {
        type: String,
        required: true
    }
})

const Tech = mongoose.model('Tech',techSchema);
module.exports = Tech;