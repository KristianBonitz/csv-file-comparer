// server.js
// where your node app starts

// init project
var express = require('express');
var bodyParser = require('body-parser');
var formidableMiddleware = require('express-formidable');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(formidableMiddleware());

// init sqlite db
var fs = require('fs');
var dbFile = './.data/sqlite.db';
var exists = fs.existsSync(dbFile);
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbFile);

// if ./.data/sqlite.db does not exist, create it, otherwise print records to console
// db.serialize(function(){
//   if (!exists) {
//     db.run('CREATE TABLE Dreams (dream TEXT)');
//     console.log('New table Dreams created!');
    
//     // insert default dreams
//     db.serialize(function() {
//       db.run('INSERT INTO Dreams (dream) VALUES ("Find and count some sheep"), ("Climb a really tall mountain"), ("Wash the dishes")');
//     });
//   }
//   else {
//     console.log('Database "Dreams" ready to go!');
//     // db.each('SELECT * from Dreams', function(err, row) {
//     //   if ( row ) {
//     //     console.log('record:', row);
//     //   }
//     // });
//   }
// });

app.post('/upload', function(req, res){
  console.log(req.files);
});



