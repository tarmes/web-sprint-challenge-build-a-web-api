// Write your "projects" router here!
const express = require('express')
const {
   validateProjectId,
   validateProjectPost
} = require('../../middlewares/middlewares')
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

router.post('/', validateProjectPost, async (req, res) => {
   try {
      const newProject = await projectsHelper.insert(req.body)
      res.status(201).json(newProject)
   } catch (error) {
      res.status(500).json({ error: "project could not be added"})
   }
})

router.put('/:id', validateProjectId, validateProjectPost, async (req, res) => {
   try {
      const updatedProject = await projectsHelper.update(req.params.id, req.body)
      res.status(200).json(updatedProject)
   } catch (error) {
      res.status(500).json({ error: "unable to update the project"})
   }
})

router.delete('/:id', validateProjectId, (req, res) => {
   projectsHelper.remove(req.params.id)
   .then(res => {
      res.status(200).json({ message: "The project was successfully deletedd"})
   })
   .catch(error => {
      res.status(500).json({ message: "The project could not be deleted"})
   })
})

module.exports = router