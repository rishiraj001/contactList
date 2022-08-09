const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')

// rendering Home.ejs
router.get('/', userController.renderHome);

//creating Contact
router.post('/create_contact', userController.createContact)

//Deleting the Contact
router.get('/delete_contact/', userController.deleteContact)

//update Contact
router.post('/update_contact',userController.updateContact)

module.exports = router;