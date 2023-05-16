import Router from 'express'
import {body} from "express-validator";
import contactController from "../controllers/contact.controller";


const emailValidation = body('email').trim().isEmail().isLength({min: 1, max: 100})
const phoneValidation = body('phone').isString().custom(async (value) => {
    if(value.includes('+380')) {
        return true
    }
    throw new Error('incorrect number')
})
export const contactRouter = Router()
contactRouter.post('/contact', emailValidation, phoneValidation, contactController.createContactinfo)
contactRouter.get('/contact', contactController.getContactInfoByUser)


export class userRouter {
}
