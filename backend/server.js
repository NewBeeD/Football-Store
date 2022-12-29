require('dotenv').config()


const express = require('express')
const mongo = require('mongoose')
const port = process.env.PORT;

// express app
const app = express();

app.use(express.json())

// Routes
app.get('/', (req, res)=>{

  res.json({mssg: 'Hello World'})
})


// Listening for requests
app.listen(port, ()=>{

  console.log(`Listening on port: ${port}`);
})








