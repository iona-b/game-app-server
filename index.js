const app = require('express')();
const http = require('http').Server(app);

app.get('/', (req, res) => {
  res.send("Hello World!")
})

http.listen(3000)

// This is an unnecessary comment.