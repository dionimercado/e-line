const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('It works!');
});

app.listen( process.env.PORT || 7777, () => {
    console.log('Server up and running on port', process.env.PORT || 7777)
});