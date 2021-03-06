var express = require('express')
var app = express()

var multipart = require('connect-multiparty'); //for files upload
var multipartMiddleware = multipart({ uploadDir: './' });
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/',multipartMiddleware, function(req,res){
    console.log(req.body);
    console.log(req.file);
});

app.listen(5002, function () {
  console.log('Example app listening on port 5002!')
})