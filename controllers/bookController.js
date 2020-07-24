const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Book = mongoose.model('Books');


router.get('/', (req,res)=>{
    res.render("books/addOrEdit", {
        viewTitle : "Add Book"
    });
});

router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
        else
        updateRecord(req, res);
});

function insertRecord(req, res) {
    var book = new Book();
    book.Title = req.body.Title;
    book.Author = req.body.Author;
    book.ISBN = req.body.ISBN;
  //  bookEgz.DataWydania = req.body.DataWydania;
  book.Language = req.body.Language;
  book.Opis = req.body.Opis;
  book.save((err, doc) => {
        if (!err)
            res.redirect('book/list');
         else{
            console.log('Error during record insertion : ' + err);
         }
    });
}

router.get('/list', (req, res) => {
    
res.json('from list');
});



module.exports = router;