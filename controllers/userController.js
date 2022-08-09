const ContactSchema = require('../models/contactSchema')

//Rendering the Home
const renderHome = (req, res) => {
    ContactSchema.find({}, (err, contactList)=>{
        if(err){
            console.log('error in fetching Contact')
            return;
        }

        return res.render('home.ejs',{
            title: " home Page",
            //passsing the contactList for locals
            contact_list : contactList
        });
    })
}
//Creating Contact
const createContact = (req, res) => {
    ContactSchema.create(req.body, (err)=>{
        if(err){
            console.log('error in creatng Schema')
            return;
        }
        return res.redirect('back');
    });    
}
//Deleting Contact
const deleteContact = (req, res) => {
    let id = req.query.id;
    ContactSchema.findByIdAndDelete(id,(err)=>{
        if(err){
            console.log('error in deleting Contact')
            return;
        }
        //Contact Deleted Successfully
        res.redirect('back');
    })
}

//Update Contact
const updateContact = (req, res) => {
    let id = req.query.id;
    ContactSchema.findByIdAndUpdate(id, {$set: req.body},(err)=>{
        if(err){
            console.log('error in creatng Schema')
            return;
        }
        return res.redirect('back')
    })
}

module.exports = {
    updateContact,
    renderHome,
    deleteContact,
    createContact
}