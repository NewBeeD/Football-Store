require('dotenv').config()


const express = require('express')
const mongoose = require('mongoose')
const ecommRoutes = require('./Routes/ecommerceRoutes')
const cors = require('cors')

// access keys
const port = process.env.PORT;
const password = process.env.MONGO;

// express app
const app = express();


app.use(express.json())
app.use(cors())

// Routes
app.use('/api/football',ecommRoutes)


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








