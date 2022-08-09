const express = require('express');
const dotenv = require('dotenv');
const path = require('path')
const bodyParser = require("body-parser");
dotenv.config({
    path: './config.env'
})
const PORT = process.env.PORT || 8000;
// acquiring DB
require('./config/mongoose')

const cors = require('cors')


const app = express();

//mapping view engine with ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: true }));

// using the static files
app.use(express.static(path.join(__dirname, 'views')))

//cors
app.use(cors());

app.use('/',require('./routes/routes.js'))

app.listen(PORT, ()=>{
    console.log("Successfully Running on 8000");
})