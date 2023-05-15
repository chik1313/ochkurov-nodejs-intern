const Router = require('express')
const router = new Router()
const contactController = require('../controllers/contact.controller')
const {body} = require("express-validator");

const emailValidation = body('email').isEmail()
const phoneValidatin = body('phone').isString().custom((value) => {
    if(value.includes('+375')) {
        return true
    }
    throw new Error('incorrect number')
})

router.post('/contact', emailValidation, phoneValidatin,contactController.createContactinfo)
router.get('/contact', contactController.getContactInfoByUser)


module.exports = router
