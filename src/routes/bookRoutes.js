var bookRouter, books, express, router;

express = require('express');

bookRouter = express.Router();

books = [
  {
    id: '0',
    title: 'War and Peace',
    genre: 'Historical Fiction',
    author: 'Lev Nikolayevich Tolstoy',
    cover: 'http://covers.openlibrary.org/b/isbn/1584776951-S.jpg',
    read: false
  }, {
    id: '1',
    title: 'Les Misérables',
    genre: 'Historical Fiction',
    author: 'Victor Hugo',
    cover: 'http://covers.openlibrary.org/b/isbn/0674007034-S.jpg',
    read: false
  }, {
    id: '2',
    title: 'The Time Machine',
    genre: 'Science Fiction',
    author: 'H. G. Wells',
    cover: 'http://covers.openlibrary.org/b/isbn/1555877214-S.jpg',
    read: false
  }, {
    id: '3',
    title: 'A Journey into the Center of the Earth',
    genre: 'Science Fiction',
    author: 'Jules Verne',
    cover: 'http://covers.openlibrary.org/b/isbn/0823216438-S.jpg',
    read: false
  }, {
    id: '4',
    title: 'The Dark World',
    genre: 'Fantasy',
    author: 'Henry Kuttner',
    cover: 'http://covers.openlibrary.org/b/isbn/0813741130-S.jpg',
    read: false
  }
];

router = function() {
  bookRouter.route('/').get(function(req, res) {
    var data;
    data = {
      title: 'Books',
      books: books
    };
    return res.render('bookListView', data);
  });
  bookRouter.route('/:id').get(function(req, res) {
    var data;
    data = {
      book: books[req.params.id]
    };
    return res.render('bookView', data);
  });
  return bookRouter;
};

module.exports = router;
