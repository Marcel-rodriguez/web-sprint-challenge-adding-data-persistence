// build your `/api/tasks` router here
const express = require('express')
const router = express.Router()

const taskModel = require('./model')

router.get('/', (req, res, next) => {
    taskModel.getAll()
    .then(tasks => {
        res.status(200).json(tasks)
    }).catch(next)
})

router.post('/', (req, res, next) => {
    taskModel.addTask()
    .then(newTask => {
        res.status(201).json({
            newTask,
            message: "task created"
        })
    }).catch(next)
})

router.use((err, req, res, next) => {
    res.status(500).json({
        custom: 'something went wrong inside the tasks router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router