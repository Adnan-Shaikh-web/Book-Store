import express from 'express'
const PORT = 5555;
import { config } from 'dotenv'
config()
const mongoURL = process.env.MONGO_URL
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js'
import cors from 'cors';

const app = express()
//Middleware for parsing request body

app.use(express.json())

// Middleware for handling cors policy
//Option1. Allow all origings with default of cors(*)
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// }))


app.use(cors())



app.get('/', (request, response) => {
    console.log(request)
    response.send('Welcome to MERN Stack Tutorial')
})

app.use('/books', booksRoute)

mongoose.connect(mongoURL)
    .then(() => {
        console.log('App connected to the database')

        app.listen(PORT, () => {
            console.log('app running at ', PORT)
        })
    })


