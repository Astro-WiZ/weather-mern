import express, { Router } from 'express'
import weatherRouter from './routes/weather.routes'
import connectDb from './config/db'
import { configDotenv } from 'dotenv'

configDotenv()
const app = express()
const apiRouter = Router()

apiRouter.get('/hello', (_req, res) => {
  res.json({ message: 'Hello world' })
})

const URL = process.env.MONGODB_URI as string
connectDb(URL)

app.use(express.urlencoded())
app.use(express.json())
// NOTE: make sure all the server route starts with /api
app.use('/api/location', weatherRouter)
app.use('/api', apiRouter)

export default app
