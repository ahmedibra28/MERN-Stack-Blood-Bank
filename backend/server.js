import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import bloodStoreRoutes from './routes/bloodStoreRoutes.js'
import bloodRequestRoutes from './routes/bloodRequestRoutes.js'
import bloodIssueRoutes from './routes/bloodIssueRoutes.js'

dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/blood-store', bloodStoreRoutes)
app.use('/api/blood-request', bloodRequestRoutes)
app.use('/api/blood-issue', bloodIssueRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running ${process.env.NODE_ENV} mode on post ${PORT}`.yellow.bold
  )
)
