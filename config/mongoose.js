const mongoose = require('mongoose')
const DB = process.env.DB;

//conneting to the database
mongoose.connect(DB).then(()=> {
    console.log("Connected to DB");
}).catch(err => {
    console.log(err);
})