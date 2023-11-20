 /*
============================================
; Title:  index.js
; Author: Brock Hemsouvanh
; Original Author: Professor Richard Krasso
; Date:   11/09/2023
; Description: Importing express and morgan server.
;===========================================
*/ 

// imports
const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

// set views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev')); 

// listen on port 3000
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
