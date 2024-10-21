const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 40000;

const router = require('./routes/router');

app.use(bodyParser.urlencoded({extendede:false, }));
app.use(express.json());

app.use(router);

app.listen(port, 
    ()=>console.log(`App listening at port ${port}`));