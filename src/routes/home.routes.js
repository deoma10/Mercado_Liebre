const express = requiere('express');
const router = express.Router();
const path = require('path');


// Si no funciona falta un punto el el ./views.....
router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html') );
});


module.exports = router;