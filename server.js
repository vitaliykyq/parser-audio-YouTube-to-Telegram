const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const Logger = require('./Logger');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/views'));

const index = require('./routes');
app.use('/', index);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('<script>location.href = "/"</script>');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message);
});

// listen on port 3300
let port = process.env.PORT || 3500;
app.listen(port, () => {
  Logger.Warn(Logger.Mode.SERVER, 'Express app listening on port ' + port);
});