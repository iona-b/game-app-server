const app = require('express')();
const http = require('http').Server(app);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const playerRoute = require('./src/routes/player.js');
const roomRoute = require('./src/routes/room.js');

app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/game-app-api', {
    useNewUrlParser: true,
    useCreateIndex: true
}). then(() => {
    console.log("Database Connection Successful!");
}). catch((error) => {
    console.log(`There was an error: ${error}.`)
});

app.get('/', (req, res) => {
  res.send("Hello World!")
})

app.use('/api/player', playerRoute);
app.use('/api/room', roomRoute);

http.listen(3000);