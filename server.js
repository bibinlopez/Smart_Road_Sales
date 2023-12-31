require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

//rest of the packages
const morgan = require('morgan')

//connectDB
const connectDB = require('./db/connect')

const authRoute = require('./routes/authRoute')
const userRoute = require('./routes/userRoute')
const productRoute = require('./routes/productRoute')
const orderRoute = require('./routes/orderRoute')

//middlewares
const notFound = require('./middlewares/not-found')
const errorHandlerMiddleware = require('./middlewares/error-handler')

app.use(morgan('tiny'))
app.use(express.json())

app.use(express.static('./public'))
// app.get('/', (req, res) => {
//    res.send('SmartRoadSales-shop-api')
//    // throw new Error('hello there')
// })

app.use('/api/v1/auth', authRoute)
app.use('/api/v1/user', userRoute)
app.use('/api/v1/product', productRoute)
app.use('/api/v1/order', orderRoute)

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server listening on port ${port}`))
  } catch (err) {
    console.log(err)
  }
}

start()
