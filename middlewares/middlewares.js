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

module.exports = {
   validateActionId
}