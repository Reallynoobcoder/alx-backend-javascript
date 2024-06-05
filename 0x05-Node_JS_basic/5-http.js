const http = require('http');
const readFileasync = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const originalConsoleLog = console.log;
    console.log = () => {};

    readFileasync(process.argv[2])
      .then((studentsData) => {
        console.log = originalConsoleLog;

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(studentsData);
      })
      .catch((error) => {
        console.log = originalConsoleLog;

        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Cannot load the database');
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

const Port = 1245;

app.listen(Port, 'localhost', () => {
  console.log(`Server running at http://localhost:${Port}/`);
});

module.exports = app;
