const express = require('express');

const path = require('path');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');
let db = mongoose.Connection;

//pug set
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');




//route
app.get('/', function(req,res)



{

    {
        let articles = 
        [
            {
                id:1,
                title:'Authers',
                auther:'sahjaan',
                body: 'sahjaan khan vailable'
            },
            {
                id:2,
                title:'Authers',
                auther:'sahjaan',
                body: 'sahjaan khan vailable'
            },
            {
                id:3,
                title:'Authers',
                auther:'sahjaan',
                body: 'sahjaan khan vailable'
            },
            {
                id:4,
                title:'Authers',
                auther:'sahjaan',
                body: 'sahjaan khan vailable'
            }

        ]
    }

    res.render('index', {
        title:"Hello"
    });
});





    app.get('/articles/add', function(req,res)
    {
        res.render('add_articles', {
            title:'Add Articles'
        });
    });

    
    





//server start

app.listen(3000, function()
{
    console.log(`server stratted`);

});
