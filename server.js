var express = require('express'),
    app     = express();

var port    = 2043  || process.env.PORT;



app.use(express.static('public'));


app.listen(port, function(){
    console.log("Evolving on port: ", port);
});
