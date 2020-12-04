// Write your "actions" router here!
const express = require('express')
const { 
   validateActionId,
   validateActionPost
} = require('../../middlewares/middlewares')
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

router.get('/:id', validateActionId, (req, res) => {
   res.status(200).json(req.action)
})

router.post('/', validateActionPost, async (req, res) => {
   try {
      const newAction = await actionsHelper.insert(req.body)
      res.status(201).json(newAction)
   } catch (error) {
      res.status(500).json({ error: "action could not be added"})
   }
})

module.exports = router