const app = require('express')();
const http = require('http').Server(app);
const mongoose = require('mongoose');

app.get('/', (req, res) => {
  res.send("Hello World!")
})

http.listen(3000);

mongoose.connect('mongodb://127.0.0.1:27017/game-app-api', {
    useNewUrlParser: true,
    useCreateIndex: true
}). then(() => {
    console.log("Database Connection Successful!");
}). catch((error) => {
    console.log(`There was an error: ${error}.`)
});