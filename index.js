const express = require('express');
const app = express();
const port = 8083;
const bodyParser = require('body-parser');
const dbConnection = require('./config/db');
dbConnection();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.use('/',require('./routers'))


app.listen(port,(err)=>{
    if(!err){
        console.log('Server start'+port); 
        console.log("http://localhost:"+port);
    }else{
        console.error('Error starting server:', err);
    }
})