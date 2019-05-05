var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var songs = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/previousSongs', function (req, res) {
  songs.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/saveSong', (req, res) => {
  console.log('BODY: ', req.body)
  songs.saveOne(req.body, (err, success) => {
    if (err) {
      console.log(err)
    } else {
      res.send('successoooo')
    }
  })
  res.end();
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

