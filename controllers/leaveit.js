const express = require('express');
const router = express.Router();

router.get('/movies', (req, res) => {
    res.render('leave-it/movies', {movies: ['it', 'us']});

});
router.get('/products', (req, res) => {
    res.render('leave-it/products', {products: ['Trash bags', 'pens']});

});

module.exports = router;
