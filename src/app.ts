import express, { Application } from 'express';
const app:Application = express()


app.get('/', (req, res) => {
  res.send('Cow server applicationh running succesfully ')
})

export default app;