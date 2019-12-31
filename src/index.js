import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import {connectDB} from './config/db.js'
dotenv.config()
const app = express()
const {PORT} = process.env

connectDB()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(logger('dev'))
app.use(cors())

app.get('/', (req, res) => {
	res.send('VERY CA$H MONEY')
})

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`))