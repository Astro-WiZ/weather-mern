import express, { Router } from 'express'

const app = express()
const apiRouter = Router()

apiRouter.get('/hello', (_req, res) => {
  res.json({ message: 'Hello world' })
})

// NOTE: make sure all the server route starts with /api
app.use('/api', apiRouter)

export default app
