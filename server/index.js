import express, {Router} from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import routes from './routes/route.js'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

const app = express()



app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.get('/', (req, res) => {
    res.send('This is the backend of the code')
})
app.use('/users', routes)
dotenv.config()

const PORT = process.env.PORT || 8000


mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running successfully on port no ${PORT}`)
    })
    console.log('Database connected successfully') 
}).catch(error => {
    console.log('Error: ', error.message)
})

