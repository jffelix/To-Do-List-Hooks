const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const path = require('path');
const app = express();
const port = 3001;

app.listen(port, () => {
    console.log(`Listening from port ${port}!`);
})