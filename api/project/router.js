// build your `/api/projects` router here
const express = require('express')
const router = express.Router()
const projectModel = require('./model')

router.get('/', (req, res, next) => {
    projectModel.getAll()
    .then(projects => {
        res.status(200).json(projects)
    }).catch(next)
})

router.post('/', (req, res, next) => {
    projectModel.addProject()
    .then(newProject => {
        res.status(201).json({
            newProject,
            message: "project created"
        })
    }).catch(next)
})

router.use((err, req, res, next) => {
    res.status(500).json({
        custom: 'something went wrong inside the projects router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router