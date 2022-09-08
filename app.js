const express = require('express');
const productsRouter = require('./routes/products');
const app = express();

const server = app.listen(8080, () => console.log('server up'));

app.use(express.json());
app.use('/', express.static('public'));
app.use('/api/products', productsRouter);

