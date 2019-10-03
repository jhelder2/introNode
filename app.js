const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
})

app.listen(port, () =>
console.log(`app is running on port ${port}`);
};

// const http = require('http');

// const hostname = '127.0.0.1';//local host
// const port = process.env.PORT || 3000; //this is a node convention

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });