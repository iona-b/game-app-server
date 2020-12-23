const mongoose = require('mongoose')

const RoomSchema = new mongoose.Schema({
  roomName: String,
  questionsArray: Array,
  answersObject: Object
})

module.exports = mongoose.model('Room', RoomSchema)