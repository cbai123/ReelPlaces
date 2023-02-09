const express = require('express');
const Model = require('../model/model')

const router = express.Router()


//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
  try{
    console.log(req.params.id)
      const data = await Model.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
})

module.exports = router;