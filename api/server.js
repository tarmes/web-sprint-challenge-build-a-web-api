const express = require('express');
const server = express();

const actionsRouter = require('./actions/actions-router')

server.get('/', (req, res) => {
   res.send(`<h2>Trevor's Sprint Challenge Submission!!</h2>`)
})

// Complete your server here!
// Do NOT `server.listen()` inside this file!

server.use(express.json())
server.use('/api/actions', actionsRouter)

module.exports = server;
