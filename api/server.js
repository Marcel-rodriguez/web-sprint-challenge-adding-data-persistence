// build your server here and require it from index.js
const express = require('express')
const morgan = require('morgan')

const tasksRouter = require('./recipes/tasks-router')

const server = express()

server.use(express.json())

server.use('/api/recipes', tasksRouter)

server.use('*', (req, res) => {
    res.json({api: 'up'})
})

module.exports = server;
