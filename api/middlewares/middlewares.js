//imports
const yup = require('yup')

//models 
const projectModel = require('../project/model')
const resourceModel = require('../resource/model')
const taskModel = require('../task/model')

const db = require('../../data/dbConfig')
const req = require('express/lib/request')

//Project middlewares

const projectPayloadSchema = yup.object({
    project_name: yup.string().trim().required(),
    project_description: yup.string(),
    project_completed: yup.bool()
})

const checkProjectPayload = async (req, res, next) => {
    try{
        const validPayload = await projectPayloadSchema.validate(req.body)
        req.body = validPayload
        next()
    } catch(err) {
        next({status: 400, message: err.message})
    }
}

const checkProjectNameUnique = async (req, res, next) => {
             db('projects')
            .where('project_name', req.body.project_name)
            .first()
            .then(project => {
                if(project){
                    res.status(400).json({message: 'Project names must be unique!'})
                } else {
                    next()
                }
            }).catch(next)
}

//resources middlewares

//tasks middlewares


module.exports = {
    checkProjectPayload,
    checkProjectNameUnique
}