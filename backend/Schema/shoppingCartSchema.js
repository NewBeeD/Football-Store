const mongoose = require('mongoose')

const Schema = mongoose.Schema

const shoppingCartSchema = new Schema({

  item:{
    type: Object
  }

})

module.exports = mongoose.model('EcommWebAppCart', shoppingCartSchema)