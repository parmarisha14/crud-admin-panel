const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');


router.get('/',bookController.homePage);


router.get('/add', bookController.addBookPage);
router.post('/add', bookController.addBook);


router.get('/view', bookController.viewBookPage);


router.get('/delete/:id', bookController.deleteBook);


router.get('/edit/:id', bookController.editBookPage);
router.post('/edit/:id', bookController.editBook);
module.exports = router;