
const {getAllItems, getSingleItem, addInventory, deleteInventory, updateInventory} = require('../Controllers/shoppingCartController')
const express = require('express')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()


// Require Authentication for all routes
router.use(requireAuth)


// Get all data
router.get('/', getAllItems)

// Get single data
router.get('/:id', getSingleItem)

// Post single data point
router.post('/', addInventory)

// Delete single post
router.delete('/:id', deleteInventory)

// Update single post
router.patch('/:id', updateInventory)


module.exports = router