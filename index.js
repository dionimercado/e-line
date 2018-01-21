const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('It works!');
});

app.listen(8081, () => {
    console.log('Server running...');
});