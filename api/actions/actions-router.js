// Write your "actions" router here!
const express = require('express')

const actionsHelper = require('./actions-model')

const router = express.Router()

router.get('/', async (req, res) => {
   try {
      const actions = await actionsHelper.get()
      res.json(actions)
   } catch (error) {
      res.status(500).json({ error: "The actions information could not be retrieved." })
   }
})

router.get('/:id', async (req, res) => {
   
})

module.exports = router