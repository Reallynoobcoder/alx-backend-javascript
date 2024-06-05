const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((students) => {
      res.send(`This is the list of our students\n${students}`);
    })
    .catch((error) => {
      res.status(500).send(`Error: ${error.message}`);
    });
});

const Port = 1245;

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});

module.exports = app;
