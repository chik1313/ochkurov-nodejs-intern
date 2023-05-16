import express from 'express'
import {contactRouter} from "./routes/contact.routes";
import {userRouter} from "./routes/user.routes";




const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())


app.use('/api', userRouter)
app.use('/api', contactRouter)





app.listen(PORT , () => console.log(`server started on post ${PORT}`))
