// const express = require('express');
// const hbs = require('hbs');
// const path = require('path');
// const port = process.env.PORT || 3000;

// const app = express();

// app.use(express.static('public'));

// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname + "views"));

// app.get('/', (req, res) => {
//   res.render('home', {homemessage:"hey there", bio: "anything"});
// })

// app.listen(port, () => {
// console.log(`app is running on port ${port}`);
// })

const http = require('http');

const hostname = '127.0.0.1';//local host
const port = process.env.PORT || 3000; //this is a node convention

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});