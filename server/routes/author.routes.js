const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.get('/api/authors', AuthorController.findAllAuthors);
    app.post('/api/author/new', AuthorController.createAuthor);
    app.get('/api/author/:id', AuthorController.getAuthor);
    app.put('/api/author/:id', AuthorController.updateAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAuthor);
}


