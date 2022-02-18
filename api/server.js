// build your server here and require it from index.js
const express = require('express')
const morgan = require('morgan')

const tasksRouter = require('./task/router')
const resourceRouter = require('./resource/router')
const projectRouter = require('./project/router')

const server = express()

server.use(express.json())
server.use(morgan('tiny'))

server.use('/api/recipes', tasksRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/projects', projectRouter)

server.use('*', (req, res) => {
    res.json({api: 'up'})
})

module.exports = server;
