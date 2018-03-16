var express = require('express');
// Create our App
var app = express();

// Const keyword is better to use this way so that it's not changed. User all caps for the variable when using const kw.
const PORT = process.env.PORT || 3000;

// app.use(function (req, res, next) {
//   if (req.headers['x-forwarded-proto'] === 'http') {
//     next();
//   } else {
//     res.redirect('http://' + req.hostname + req.url);
//   }
// });

app.use(express.static('src'));

app.listen(PORT, function () {
  console.log('Hello React App express server is running on port ' + PORT);
});
