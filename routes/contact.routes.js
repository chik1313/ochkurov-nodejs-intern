const Router = require('express')
const router = new Router()
const contactController = require('../controllers/contact.controller')
const {body} = require("express-validator");

const emailValidation = body('email').trim().isEmail().isLength({min: 1, max: 100})
const phoneValidatin = body('phone').isString().custom(async (value) => {
    if(value.includes('+380')) {
        return true
    }
    throw new Error('incorrect number')
})

router.post('/contact', emailValidation, phoneValidatin,contactController.createContactinfo)
router.get('/contact', contactController.getContactInfoByUser)


module.exports = router
