const express = require('express');
const path = require('path');

// Create our app
const app = express();
const PORT = 3000;

app.use(express.static('public'));

// Handles all routes so you do not get a not found error
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
