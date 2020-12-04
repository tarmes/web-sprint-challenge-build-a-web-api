const Actions = require('../api/actions/actions-model')
const Projects = require('../api/projects/projects-model')

const validateActionId = async (req, res, next) => {
   const { id } = req.params
   try {
      const action = await Actions.get(id)
      if (!action) {
         res.status(404).json({ message: `Action with id ${id} not found.`})
      } else {
         req.action = action
         next()
      }
   } catch (error) {
      res.status(400).json({ message: "Invalid Action id"})
   }
}

const validateProjectId = async (req, res, next) => {
   const { id } = req.params
   try {
      const project = await Projects.get(id)
      if (!project) {
         res.status(404).json({ message: `Project with id ${id} not found.`})
      } else {
         req.project = project
         next()
      }
   } catch (error) {
      res.status(400).json({ message: "Invalid Project id"})
   }
}

// const validateAction = async (req, res, next) => {
//    try {
//       if (!req.body) {
//       res.status(400).json({ message: "missing action data"})
//    } else if (!req.text) {
//       res.status(400).json({ message: "missing required text field"})
//    } else {
//       next()
//    }} catch (error) {
//       res.status.
//    }   
// }

module.exports = {
   validateActionId,
   validateProjectId
}