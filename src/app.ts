import express, { Application, Request, Response, NextFunction } from 'express'
const app: Application = express()
import cors from 'cors'
import router from './app/routes/index'
import httpStatus from 'http-status'
import globalErrorHandler from './app/middlewares/globalErrorHandler'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1/', router)
app.use(globalErrorHandler)
app.get('/', (req: Request, res: Response) => {
  res.send('Cow server applicationh running succesfully ')
})

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  })
  next()
})

export default app
