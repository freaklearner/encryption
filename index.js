require('dotenv').config();
const express = require('express');
const process = require('process');

const routes = require('./routes');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/v1',routes);

const port = process.env.PORT||3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


