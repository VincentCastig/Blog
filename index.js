const dotenv = require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const port = 3000

const userCtrl = require('./public/Ctrl/controller');

const app = module.exports = express();
app.use(json());
app.use(cors());

const connectionString = process.env.DATABASE_URL; //Connects to heroku bro
console.log('connetion', connectionString)
massive(connectionString).then(db => {app.set('db', db)});



app.post('/postArticle', userCtrl.post_article);
app.get('/getAllArticles', userCtrl.get_all_articles);
app.get('/getNewArticles', userCtrl.get_new_articles);
app.get('/getArticle/:id', userCtrl.get_article);



app.listen(process.env.PORT, () => { console.log(`Listening on port: 3000`)});