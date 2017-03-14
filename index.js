const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const methodOverride = require('method-override');

require('dotenv').config();

const cors = require('cors');
app.use(cors());

// TEMPORARILY ADDING EJS SO I CAN TEST NODE-FETCH W A FORM
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(methodOverride('_method'));

app.use(require('./resources.js'));

app.listen(process.env.PORT || 8000);

//need exports for testing
module.exports = app;
