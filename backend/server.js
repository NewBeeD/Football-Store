require('dotenv').config()


const express = require('express')
const mongoose = require('mongoose')
// Routes
const ecommRoutes = require('./Routes/ecommerceRoutes')
const shoppingCartRoutes = require('./Routes/shoppingCartRoutes')
// Cross Origin Resource Sharing
const cors = require('cors')

// access keys
const port = process.env.PORT;
const password = process.env.MONGO;

// express app
const app = express();


app.use(express.json())
app.use(cors({
  origin: '*',
}))

// Routes
app.use('/api/football',ecommRoutes)
app.use('/api/cart',shoppingCartRoutes)


// Connect to db and server
mongoose.set('strictQuery', false);
mongoose.connect(password)
.then(()=>{

  // Listen for requests
  app.listen(port, ()=>{
    console.log(`Connected to Database and Listening on port: ${port}`);
  })
})
.catch((error) => {
  console.log(error);
})








