const axios = require('axios');
const express = require('express');
const pool = require('../modules/pool');


const router = express.Router();



router.get('/:q', (req, res) => {
  let image = req.params
    console.log('my .env:', image)

    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${image}`)
  
    .then((response) => {
      res.send(response.data);
      console.log('lookng at response.data',response.data)
    })
    .catch((error) => {
      console.log('error in this code', error)
      res.sendStatus(500);
    });
});

module.exports = router;