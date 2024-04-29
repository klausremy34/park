 let express = require('express');
 let ejs = require('ejs');
 
 let app = express();
 //render 
 app.use(express.static('public'));
 //tell exprerss use ejs
 app.set('view engine','ejs');
 //port
 app.listen(3090);

 app.get('/',function(req,res){
res.render('pages/index');
 });

 app.get('/nature',function(req,res){
res.render('pages/nature');
 });

 app.get('/the_world',function(req,res){
    res.render('pages/the_world');
 });

 app.get('/about',function(req,res){
res.render('pages/about')
 });
 app.get('/contact',function(req,res){
res.render('pages/contact')
 });