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

  const {category, brand, name, price, type, path} = req.body

  try{
    const schema = await ecommSchema.create({category, brand, name, price, type, path})
    res.status(200).json(schema)
  }
  catch(error){
    res.status(400).json({error: error.message})
  }
}

// update inventory
const updateInventory = async (req, res) => {

  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such Inventory'})
  }

  const inventory = await ecommSchema.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if(!inventory){
    return res.status(400).json({error: 'No Such Inventory'})
  }
  
  res.status(200).json(inventory)
}


// Delete Inventory
const deleteInventory = async (req, res) => {

  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such Inventory'})
  }

  const inventory = await ecommSchema.findOneAndDelete({_id: id})

  if(!inventory){
    return res.status(400).json({error: 'No Such Inventory'})
  }
  
  res.status(200).json(inventory)
}


module.exports = {
  addInventory,
  getSingleInventory,
  getAllInventory,
  deleteInventory,
  updateInventory
}