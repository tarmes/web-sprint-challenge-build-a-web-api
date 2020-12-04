// Write your "projects" router here!
const express = require('express')
const { validateProjectId } = require('../../middlewares/middlewares')
const projectsHelper = require('./projects-model')

const router = express.Router()

router.get('/', async (req, res) => {
   try {
      const projects = await projectsHelper.get()
      res.json(projects)
   } catch (error) {
      res.status(500).json({ error: "The projects information could not be retrieved."})
   }
})

router.get('/:id', validateProjectId, (req, res) => {
   res.status(200).json(req.project)
})

router.get('/:id/actions', validateProjectId, (req, res) => {
   projectsHelper.getProjectActions(req.params.id)
      .then(actions => {
         res.status(200).json(actions)
      })
      .catch(error => {
         res.status(500).json({ message: "Error getting the actions for this project."})
      })
})
module.exports = router