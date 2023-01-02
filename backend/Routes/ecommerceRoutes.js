
const {addInventory, getSingleInventory, getAllInventory, deleteInventory, updateInventory} = require('../Controllers/ecommController')
const express = require('express')
const router = express.Router()



// Get all data
router.get('/', getAllInventory)

// Get single data
router.get('/:id', getSingleInventory)

// Post single data point
router.post('/', addInventory)

// Delete single post
router.delete('/:id', deleteInventory)

// Update single post
router.patch('/:id', updateInventory)


module.exports = router