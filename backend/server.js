const data = require('./data.js');
const express = require('express')
const app = express();


const port = process.env.PORT || 5000;

app.get('/api/products', (req, res) => {
    res.send(data.products);
})


//:id is a placeholder for id of product
app.get('/api/products/:id', (req, res) => {
    const product = data.products.find( x => x._id === req.params.id);
    if(product) {
        res.send(product);
    } else {
        res.status(404).send({message: "Product not Found"});
    }
})


app.get('/', (req, res) => {
    res.send('Sever is ready')
});

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
});
