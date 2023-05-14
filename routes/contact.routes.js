const Router = require('express')
const router = new Router()
const contactController = require('../controllers/contact.controller')

router.post('/contact', contactController.createContactinfo)
router.get('/contact', contactController.getContactInfoByUser)




module.exports = router
