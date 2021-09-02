const data = require('./data.js');
const express = require('express')
const app = express();


const port = process.env.PORT || 5000;

app.get('/api/products', (req, res) => {
    res.send(data.products);
})

app.get('/', (req, res) => {
    res.send('Sever is ready')
});

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
});
