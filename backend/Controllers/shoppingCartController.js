const shoppingCartSchema = require('../Schema/shoppingCartSchema')
const mongoose = require('mongoose')


// Get all inventory
const getAllItems = async (req, res) => {

  const inventory = await shoppingCartSchema.find({})
  res.status(200).json({inventory})
}

// Get single Inventory
const getSingleItem = async (req, res) => {

  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such Inventory'})
  }

  const inventory = await shoppingCartSchema.findById(id)

  if(!inventory){
    return res.status(400).json({error: 'No Such Inventory'})
  }

  res.status(200).json(inventory)
}

// Add inventory
const addInventory = async (req, res) => {

  const {item} = req.body

  try{
    const schema = await shoppingCartSchema.create({item})
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

  const inventory = await shoppingCartSchema.findOneAndUpdate({_id: id}, {
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

  const inventory = await shoppingCartSchema.findOneAndDelete({_id: id})

  if(!inventory){
    return res.status(400).json({error: 'No Such Inventory'})
  }
  
  res.status(200).json(inventory)
}


module.exports = {
  getAllItems,
  getSingleItem,
  updateInventory,
  addInventory,
  deleteInventory
}