/* eslint-disable no-console */ // server requires console logging
import ViteExpress from 'vite-express'
import dotenv from 'dotenv'
import app from './app'

// load .env file
dotenv.config()

const PORT = process.env.PORT ?? 3000
const ENV_DEVELOPMENT = 'development'

ViteExpress.listen(app, Number(PORT), () => {
  console.log(`Server is listening on port ${PORT}`)
  if (process.env.NODE_ENV === ENV_DEVELOPMENT) {
    console.log(`Local Address: http://localhost:${PORT}/`)
  }
})
