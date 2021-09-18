const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
	title: {
        type: String,
        trim: true
    },
	author: {
        type: String,
        trim: true
    },
	category: {
        type: String,
        trim: true
    }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book