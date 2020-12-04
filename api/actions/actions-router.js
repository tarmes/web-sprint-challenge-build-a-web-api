// Write your "actions" router here!
const express = require('express')
const { 
   validateActionId,
   validateActionPost,
   validateProjectPost
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

router.put('/:id', validateActionId, validateActionPost, async (req, res) => {
   try {
      const updatedAction = await actionsHelper.update(req.params.id, req.body)
      res.status(200).json(updatedAction)
   } catch (error) {
      res.status(500).json({ error: "unable to update the action"})
   }
})

module.exports = router