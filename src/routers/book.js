const express = require('express')
const Book = require('../models/book')

const router = new express.Router()

router.post('/book', async(req,res) => {
    const book = new Book(req.body)
    try {
        await book.save()
        res.status(201).send(book)
    } catch(e) {
        res.status(400).send(e)
    }
})

router.get('/book/find', async (req,res) => {
    try {
        const books = await Book.find({})
        res.send(books)
    } catch (e) {
        res.status(500).send()
    }
 })

router.get('/book/find/:query/:value', async (req,res) => {
    const query = req.params.query
    const value = req.params.value
    try {
        const books = await Book.find({[query]: value})
         // I know this is bad.
        if(books.length == 0){ res.send('Check parameters.')}
        res.send(books)
    } catch(e) {
        res.status(500).send()
    }
})

router.patch('/book/:id', async(req,res) => {
    try{
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        if(!book) {
            return res.status(400).send()
        }

        res.send(book)
    } catch(e) {
        res.status(500).send()
    }
})

router.delete('/book/:id', async (req,res) => {
    try{
        const book = await Book.findByIdAndDelete(req.params.id)

        if (!book) { res.status(404).send()
        }

        res.send(book)
    } catch(e) {
        res.status(500).send()
    }
})

module.exports = router