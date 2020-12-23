const express = require('express');
const router = express.Router();
const Room = require('../models/Room');

router.get('/:id', (req, res) => {
  Room.findById(req.params.id, (err, post) => {
    if (err) {
      console.log(err);
    } else {
      res.json(post);
    }
  });
});

router.post('/', (req, res) => {
  Room.create(req.body, (err, post) => {
    if (err) {
      console.log(err);
    } else {
      res.json(post);
    }
  });
});

router.put('/:id', (req, res) => {
  Room.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
    if (err) {
      console.log(err);
    } else {
      res.json(post);
    }
  });
});

router.delete('/:id', (req, res) => {
  Room.findByIdAndRemove(req.params.id, (err, post) => {
    if (err) {
      console.log(err);
    } else {
      res.json(post);
    }
  });
});

module.exports = router;