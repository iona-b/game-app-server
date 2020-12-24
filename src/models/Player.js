const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
  name: String,
  room: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Room'
  },
  host: Boolean
});

module.exports = mongoose.model('Player', PlayerSchema)