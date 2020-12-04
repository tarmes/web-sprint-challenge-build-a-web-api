const express = require('express');
const server = express();

server.get('/', (req, res) => {
   res.send(`<h2>Trevor's Sprint Challenge Submission!!</h2>`)
})

// Complete your server here!
// Do NOT `server.listen()` inside this file!

server.use(express.json())

module.exports = server;
