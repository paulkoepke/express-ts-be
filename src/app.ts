import dotenv from 'dotenv'
import express, { type Express } from 'express'
import api from './api'
import * as middleware from './middleware'

dotenv.config()

const app: Express = express()

app.use(express.json())
app.use('/api/v1', api)
app.use(middleware.notFound)
export default app
