const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const data = require('./data.js')
const userRouter = require('./routers/userRouter')

app.use('/api/users', userRouter);

app.use(passport.initialize());
require('./config/passport')(passport);
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));


app.get('/api/products/:id', (req, res) => {
    const product = data.products.find(x => x._id === req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: "Product not Found" });
    }
})
app.get('/api/products', (req, res) => {
    res.send(data.products);
})




app.get('/', (req, res) => {
    res.send('Sever is ready')
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
});
