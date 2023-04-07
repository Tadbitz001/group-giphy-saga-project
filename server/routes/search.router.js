const axios = require('axios');
const express = require('express');
const pool = require('../modules/pool');


const router = express.Router();



router.get('/:img', (req, res) => {
  let image = req.params.img
    console.log('my .env:', image)

    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${image}`)
  
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log('error in this code', error)
      res.sendStatus(500);
    });
});

module.exports = router;