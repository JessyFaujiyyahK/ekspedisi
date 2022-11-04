const express = require('express')
const app = express();
const path = require('path');

app.get('/', (req, res)=>{
    res.render('index.ejs');
});

app.get('/tambahresi', (req, res)=>{
    res.render('tambahresi.ejs');
});

app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.listen(3000);

