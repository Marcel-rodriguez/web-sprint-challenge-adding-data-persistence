// build your `/api/resources` router here
const express = require('express')
const { checkResourcePayload } = require('../middlewares/middlewares')
const router = express.Router()
const resourceModel = require('./model')

router.get('/', (req, res, next) => {
    resourceModel.getAll()
    .then(projects => {
        res.status(200).json(projects)
    }).catch(next)
})

router.post('/', checkResourcePayload, (req, res, next) => {
    resourceModel.addResource(req.body)
    .then(newResource => {
        res.status(201).json(newResource)
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