const express = require('express');
const server = express();

const actionsRouter = require('./actions/actions-router')
const projectsRouter = require('./projects/projects-router')

server.get('/', (req, res) => {
   res.send(`<h2>Trevor's Sprint Challenge Submission!!</h2>`)
})

// Complete your server here!
// Do NOT `server.listen()` inside this file!

server.use(express.json())
server.use('/api/actions', actionsRouter)
server.use('/api/projects', projectsRouter)

module.exports = server;
