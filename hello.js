var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'conten-Type': 'text/html'});
  res.end('<h1>Hello World! myname is Joni</h1>');
}).listen(8080);