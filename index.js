const express = require('express')
const userRouter = require('./routes/user.routes')
const contactRouter = require('./routes/contact.routes')


const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', contactRouter)





app.listen(PORT , () => console.log(`server started on post ${PORT}`))
