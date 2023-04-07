const axios = require('axios');
const express = require('express');
const pool = require('../modules/pool');


const router = express.Router();


//:taco is place holder for 'searchTerm'.  
  //taco is a property for req.params
    //you could take taco off req.params but then you would need to put taco at the end of 'serchTerm' on line 16.  
router.get('/:taco', (req, res) => {
  let searchTerm = req.params.taco
    console.log('this is my searchTerm', searchTerm)

    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchTerm}`)
  
    .then((response) => {
      res.send(response.data);
      // console.log('lookng at response.data',response.data)
    })
    .catch((error) => {
      console.log('error in this code', error)
      res.sendStatus(500);
    });
});

module.exports = router;