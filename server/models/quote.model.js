const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuoteSchema = new mongoose.Schema({
    quoteText: {
        type: String,
        required: [true, "Quote text required"],
        minLength: [2, "Must be at least 2 characters long"]
    }
}, { timestamps: true});

module.exports.Quote = mongoose.model('Quote', QuoteSchema);