var express = require('express');
// Create our App
var app = express();

app.use(express.static('src'));

app.listen(3000, function () {
  console.log('Hello React App express server is running on port 3000');
});
