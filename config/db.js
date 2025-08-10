const { default: mongoose } = require("mongoose");


const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb+srv://parmarisha744:12345@cluster0.jaxobdf.mongodb.net/Book');
        console.log('Connected to the database successfully');
    } catch (error) {
        console.log('Error connecting to the database:', error);
        
    }
}

module.exports = dbConnection;