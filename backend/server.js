import express from 'express';

const app = express();

app.get('/', (res, req) => {
    res.send('Sever is ready')
})


app.listen(5000, () => {
    console.log('serve at http://localhost:5000');
})
