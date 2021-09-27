const data = require('./data.js');
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routers/userRouter.js');

const app = express();
// async function main() {
//     mongoose.connect('mongodb://localhost/amazonia', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//     })
//     await mongoose.connect('mongodb://localhost/amazonia')
// }
// main();

mongoose.connect('mongodb://localhost/amazonia', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


//:id is a placeholder for id of product
app.get('/api/products/:id', (req, res) => {
    const product = data.products.find(x => x._id === req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: "Product not Found" });
    }
})

const port = process.env.PORT || 5000;

app.get('/api/products', (req, res) => {
    res.send(data.products);
})



app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.send('Sever is ready')
});

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
});
