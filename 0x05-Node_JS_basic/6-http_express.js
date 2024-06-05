const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

const Port = 1245;

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
