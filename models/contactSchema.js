const mongoose = require('mongoose')

const contact_schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    }
})

const ContactSchema = mongoose.model('ContactSchema', contact_schema);

module.exports = ContactSchema;