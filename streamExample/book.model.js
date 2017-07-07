const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema ({
    author: {
        name: String,
        surname: String,
        birthYear: Number
    },
    name: String,
    description: String
});

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;