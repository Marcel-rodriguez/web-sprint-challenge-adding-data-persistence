// build your `Project` model here
const db = require('../../data/dbConfig')

async function getAll(){
    const allData = await db('projects')
    return allData.map(project => {
        if(project.project_completed === 1){
            return {
                ...project,
                project_completed: true,
            }
        } else {
            return {
                ...project,
                project_completed: false,
            }
        }
    })
}

async function addProject(project){
    await db('projects').insert(project)
    const newProject = await db('projects')
        .where('project_name', project.project_name)
        .first()

        if(newProject.task_completed === 0){
            return {
                ...newProject,
                task_completed: false
            }
        } else {
            return {
                ...newProject,
                task_completed: false
            }
        }
}

module.exports = {
    getAll,
    addProject
}