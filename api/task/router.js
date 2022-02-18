// build your `/api/tasks` router here
const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {

})

router.post('/', (req, res, next) => {
    
})

router.use((err, req, res, next) => {
    res.status(500).json({
        custom: 'something went wrong inside the tasks router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router