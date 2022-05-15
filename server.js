//CÓDIGO ANTERIOR QUE ESTAVA FUNCIONANDO
var http = require('http');
var express = require('express');
var app = express();
var passport = require('passport');
var app = require('./config/express')(app);
require('./config/passport')(passport);
const url = 'mongodb+srv://dswa5:dswa5@cluster0.xvyvf.mongodb.net/ifsp?retryWrites=true&w=majority';
require('./config/database.js')(url);
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server escutando na porta ' + app.get('port'));
});


/* CÓDIGO DE ACORDO COM O MATERIAL
var http = require('http'); ok
var express = require('express'); este ok
var app = express(); este ok
require('./config/express')(app); este alterado
require('./config/passport')(); este alterado
require('./config/database')('mongodb://localhost/contatooh');
http.createServer(app).listen(app.get('port'), function(){
console.log('Express Server escutando na porta ' + app.get('port'));
});
*/