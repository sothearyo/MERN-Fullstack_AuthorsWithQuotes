const { Author } = require('../models/author.model');

// Create a new author -------
module.exports.createAuthor = (request, response) => {
    const { fullName, quotes } = request.body;
    Author.create({
        fullName,
        quotes
    })
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err));
};

// Read all authors -----------
module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => res.json({ authors: allAuthors }))
        .catch(err => res.json({message: "Something went wrong", error: err}));
};

// Read one author -------------
module.exports.getAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
}

// Update one author ----------
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true, context:'query'})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err))
}

// Delete one author ----------
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(deleteConfirm => res.json(deleteConfirm))
        .catch(err => res.json(err))
}