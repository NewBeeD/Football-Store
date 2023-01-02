
const {addInventory, getSingleInventory, getAllInventory} = require('../Controllers/ecommController')
const express = require('express')
const router = express.Router()



// Get all data
router.get('/', getAllInventory)

// Get single data
router.get('/:id', getSingleInventory)

// Post single data point
router.post('/', addInventory)

// Delete single post
router.delete('/:id', (req, res) => {
  res.json({mssg: 'Delete Data'})
})

// Update single post
router.patch('/:id', (req, res) => {
  res.json({mssg: 'Update Data'})
})



module.exports = router