const mongoose = require('mongoose')

const RoomSchema = new mongoose.Schema({
  roomName: {
    type: String
  },
  questionsArray: {
    type: Array
  },
  answersObject: {
    type: Array
  }
})

const Room = mongoose.model('Room', RoomSchema)

module.exports = Room

const room = new Room ({
  roomName: "room",
  questionsArray: [],
  answersObject: []
})

room.save().then(() => {
  console.log("Success!")
})