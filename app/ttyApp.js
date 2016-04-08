var tty = require('tty.js');

var app = tty.createServer({
  shell: 'bash',
  users: {
    foo: 'bar'
  },
  syncSession: true,
  port: 8001
});

app.get('/foo', function(req, res, next) {
  res.send('bar');
});

app.listen();
