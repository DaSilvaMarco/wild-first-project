const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World from nodemon')
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});