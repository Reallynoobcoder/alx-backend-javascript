const http = require('http');
const readFileasync = require('./3-read_file_async');

const app = http.Server((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    readFileasync(process.argv[2])
      .then((students) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`This is the list of our students:\n${students}`);
      })
      .catch((error) => {
        res.statusCode = 500;
        res.end(error.message);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

const Port = 1245;

app.listen(Port, 'localhost', () => {
  console.log(`Server running at http://localhost:${Port}/`);
});

module.exports = app;
