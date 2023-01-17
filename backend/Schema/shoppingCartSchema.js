const mongoose = require('mongoose')

const Schema = mongoose.Schema

const shoppingCartSchema = new Schema({

  item:{
    type: Object
  },
  size:{
    type: Number, 
    required: true
  }

})

module.exports = mongoose.model('EcommWebAppCart', shoppingCartSchema)