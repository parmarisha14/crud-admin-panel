const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    b_name: {
        type: String,
        required: true
    },
    b_price: {
        type: Number,
        required: true
    },
    edition: {
        type: String,
        required: true
    },
    author_name: {
        type: String,
        required: true
    },
    summary:{
        type:String,
        required:true
    }
},
{
    timestamps: true
}
)

const Book = mongoose.model('Booktbl', bookSchema);
module.exports = Book;