import Router from 'express'
import userController from '../controllers/user.controller'


export const userRouter = Router()

userRouter.post('/user', userController.createUser)
userRouter.get('/user', userController.getUser)
userRouter.get('/user/:id', userController.getOneUser)
userRouter.put('/user', userController.updateUser)
userRouter.delete('/user/:id', userController.deleteUser)


