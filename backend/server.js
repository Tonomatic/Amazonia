const data = require('./data.js');
const express = require('express')
const app = express();


app.get('/api/products', (req, res) => {
    res.send(data.products);
})

app.get('/', (req, res) => {
    res.send('Sever is ready')
});

app.listen(8000, () => {
    console.log('Serve at http://localhost:8000')
});
