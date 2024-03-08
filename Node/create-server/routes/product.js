const express = require('express');
const router = express.Router();

// middleware that is specific to this router
// const timeLog = (req, res, next) => {
//   console.log('Time: ', Date.now())
//   next()
// }
// router.use(timeLog)

// define the home page route


// define the home page route
router.get('/', (req, res) => {
    res.send('Product home page');
  });
  
  // Define the category route
  router.get('/category', (req, res) => {
    let arr = ["Shoes", "Watches", "Shirts", "iPhone"];
    arr.push("Shoes");
    res.send(arr);
  });
  
  router.get('/category/:shoes', (req, res) => {
    res.send('Shoes home page');
  });
  module.exports = router;



