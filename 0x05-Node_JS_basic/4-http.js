const http = require('http');

const app = http.Server((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

const Port = 1245;

app.listen(Port, 'localhost', () => {
  console.log(`Server running at http://localhost:${Port}/`);
});

module.exports = app;
