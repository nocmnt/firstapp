var express = require('express');
var app = express();
app.set('view engine', 'ejs');

var server_port = process.env.PORT || process.env.port || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_adress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1' || '0.0.0.0';


app.get('/:name', function(req, res){
  res.render('index', {name: req.params.name});
});

app.listen(server_port, server_ip_adress, function(){
  console.log("Ok, Pinik,  Listening on " + server_ip_adress + ", on port " + server_port);
});

