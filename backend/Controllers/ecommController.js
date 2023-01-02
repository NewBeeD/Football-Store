const ecommSchema = require('../Schema/ecommSchema')
const mongoose = require('mongoose')


// Get all inventory
const getAllInventory = async (req, res) => {

  const inventory = await ecommSchema.find({})
  res.status(200).json({inventory})
}

// Get single Inventory
const getSingleInventory = async (req, res) => {

  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such Inventory'})
  }

  const inventory = await ecommSchema.findById(id)

  if(!inventory){
    return res.status(400).json({error: 'No Such Inventory'})
  }

  res.status(200).json(inventory)
}

// Add inventory
const addInventory = async (req, res) => {

  const {category, brand, name, price, type} = req.body

  try{
    const schema = await ecommSchema.create({category, brand, name, price, type})
    res.status(200).json(schema)
  }
  catch(error){
    res.status(400).json({error: error.message})
  }
}


// update inventory



// Delete Inventory



module.exports = {
  addInventory,
  getSingleInventory,
  getAllInventory
}