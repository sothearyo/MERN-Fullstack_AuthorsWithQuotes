const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Author's name required"],
        minlength: [2, "Name must be at least 2 characters long"]
    },
    quotes: [{
        type: String
    }]
}, {timestamps: true});

module.exports.Author = mongoose.model('Author', AuthorSchema);