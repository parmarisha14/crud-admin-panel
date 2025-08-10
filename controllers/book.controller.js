const Book = require("../models/book.model");


exports.homePage = (req,res) =>{
        return res.render('index');       
}

exports.addBookPage = async (req,res) => {
    try {
        await res.render('pages/addBook');
    } catch (error) {
        console.log(error.message);
        return res.redirect(req.get('Referrer') || '/');
    }
}


exports.addBook = async(req,res) =>{
    try {

        await Book.create(req.body);
        console.log('Book added successfully');
        return res.redirect(req.get('Referrer') || '/');
    } catch (error) {
        console.log(error.message);
        return res.redirect(req.get('Referrer') || '/');
        
    }
}


exports.viewBookPage = async (req,res) => {
    try {
        const books = await Book.find(); 
        res.render('pages/viewBook', { books });

    } catch (error) {
        console.log(error.message);
        return res.redirect(req.get('Referrer') || '/');
        
    }
}


exports.deleteBook = async (req,res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        console.log('Book deleted successfully');
        return res.redirect(req.get('Referrer') || '/');
    } catch (error) {
        console.log(error.message);
        return res.redirect(req.get('Referrer') || '/');
        
    }
}

exports.editBookPage = async (req,res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.redirect(req.get('Referrer') || '/');
        }
        return res.render('pages/editBook', { book });
    } catch (error) {
        console.log(error.message);
        return res.redirect(req.get('Referrer') || '/');
        
    }
}


exports.editBook = async (req,res) => {
    try {
        await Book.findByIdAndUpdate(req.params.id, req.body);
        console.log('Book updated successfully');
        return res.redirect('/view');
    } catch (error) {
        console.log(error.message);
        return res.redirect(req.get('Referrer') || '/');
    }
}