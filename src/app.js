/**
 *MyMethod
* * Información importante está destacada
* ! Método obsoleto, no usar
* ? ¿Debería exponerse este método en la API pública?
* TODO: refactorizar este método para que se ajuste a la API
* @param myParam El parametro para este método
 */

const { Console } = require('console');
const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

// Vincular archivo de rutas con app.js
// const rutas = require('./routes/home');
// app.use('/',rutas);

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html') );
});

app.post('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html') );
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html') );
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html') );
});

app.listen(port, () => {
    console.log(`Listen into port ${port}`);
});