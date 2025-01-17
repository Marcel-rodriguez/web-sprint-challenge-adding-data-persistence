// build your `/api/projects` router here
const express = require('express')
const router = express.Router()
const projectModel = require('./model')

const { checkProjectNameUnique, checkProjectPayload } = require('../middlewares/middlewares')

router.get('/', (req, res, next) => {
    projectModel.getAll()
    .then(projects => {
        res.status(200).json(projects)
    }).catch(next)
})

router.post('/', checkProjectNameUnique, checkProjectPayload, (req, res, next) => {
    projectModel.addProject(req.body)
    .then(newProject => {
        res.status(201).json(newProject)
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