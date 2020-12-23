const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const Player = require ('../models/Player');

router.post('/', (request, response) => {
    Player.create(request.body, (error, post) => {
        if (error) {
            console.log(error);
        } else {
            response.json(post);
        }
    });
});

router.delete(':id', (request, response) => {
    Player.findByIdAndDelete(request.params.id, (error, post) => {
        if (error) {
            console.log(error);
        } else {
            response.json(post);
        }
    });
});

module.exports = router;