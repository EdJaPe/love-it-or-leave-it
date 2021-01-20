const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use('/loveit', require('./controllers/loveit'));
app.use('/leaveit', require('./controllers/leaveit'))

app.get('/', (req, res) => {
    res.render('home');
});
// app.get('/loveit/animals', (req, res) => {
//     res.render('animals', {animals: ['sand crab', 'corny joke dog']});
// });
// app.get('/loveit/foods', (req, res) => {
//     res.render('foods', {foods: ['coconut', 'avocado']});
// });
// app.get('/leaveit/movies', (req, res) => {
//     res.render('/leaveit/movies', {});
// });
// app.get('/leaveit/products', (req, res) => {
//     res.render('/leaveit/products');
// });


app.listen(3000)