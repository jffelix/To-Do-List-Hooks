const express = require('express');
const cors = require('cors');

const router = require('./routers/index.js');
const path = require('path');
const app = express();
const port = 3001;

app.use(express.json());

app.use(express.static(path.join(__dirname, '..', '/client/dist')));

app.use('/', router);

app.listen(port, () => {
    console.log(`Listening from port ${port}!`);
})