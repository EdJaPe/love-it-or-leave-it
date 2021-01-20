const express = require('express');
const router = express.Router();

router.get('/foods', (req, res) => {
  res.render('love-it/foods', {foods: ['coconut', 'avocado']});
});

router.get('/animals', (req, res) => {
  res.render('love-it/animals', {animals: ['sand crab', 'corny joke dog']})
});


module.exports = router;