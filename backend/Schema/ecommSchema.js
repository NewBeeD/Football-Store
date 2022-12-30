const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ecommSchema = new Schema({

  category:{
    type: String,
    required: true
  },
  brand:{
    type: String,
    required: true
  },
  name:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  ground:{
    type: String,
  }
})

module.exports = mongoose.model('EcommWebApp', ecommSchema)