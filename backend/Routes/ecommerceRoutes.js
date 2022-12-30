const express = require('express')
const ecommSchema = require('../Schema/ecommSchema')
const router = express.Router()



// Get all data
router.get('/', (req, res) =>{

  res.json({mssg: 'Get all data'})
})

// Get single data
router.get('/:id', (req, res)=>{
  res.json({mssg: 'Get Single data point'})
})

// Post single data point
router.post('/', async (req, res) => {

  const {category, brand, name, price, type} = req.body

  try{
    const schema = await ecommSchema.create({category, brand, name, price, type})
    res.status(200).json(schema)
  }
  catch(error){
    res.status(400).json({error: error.message})
  }
})

// Delete single post
router.delete('/:id', (req, res) => {
  res.json({mssg: 'Delete Data'})
})

// Update single post
router.patch('/:id', (req, res) => {
  res.json({mssg: 'Update Data'})
})



module.exports = router