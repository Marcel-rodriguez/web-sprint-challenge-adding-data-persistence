// build your `/api/resources` router here
const express = require('express')
const router = express.Router()
const resourceModel = require('./model')

router.get('/', (req, res, next) => {
    resourceModel.getAll()
    .then(projects => {
        res.status(200).json(projects)
    }).catch(next)
})

router.post('/', (req, res, next) => {
    resourceModel.addResource()
    .then(newResource => {
        res.status(201).json({
            newResource,
            message: "resource created"
        })
    }).catch(next)
})

router.use((err, req, res, next) => {
    res.status(500).json({
        custom: 'something went wrong inside the resources router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router