var express = require('express'),
    app     = express();
var request = require('request');
var port    = 2043  || process.env.PORT;


request('https://www.rijksmuseum.nl/api/en/schilderij/?key=mherhzxy&format=json&pageSize=16', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for Rijks museum
  }
})


app.use(express.static('public'));


app.listen(port, function(){
    console.log("Evolving on port: ", port);
});
