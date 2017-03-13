const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.use(require('./resources.js'));

app.listen(process.env.PORT || 8000);


