const bookModel = require('../Models/bookModel')
const db = require("../db")

// create main Model
const Book = bookModel.books

// main work

// 1. create book

const addBook = async (req, res) => {

    let info = {
        title: req.body.title,
        author: req.body.author,
        release_date: req.body.release_date,
        subject: req.body.subject,
    }

    const book = await Book.create(info)
    res.status(200).send(book)
    console.log(book)

}

module.exports = addBook

