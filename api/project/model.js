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
        } else if(project.project_completed === 0) {
            return {
                ...project,
                project_completed: false,
            }
        }
    })
}

 async function addProject(project){
    //    const newProject = await db('projects').insert(project)
    //    const response = await db('projects').where('project_id', newProject)

    //    console.log(response[0])

    //    if(!response[0].project_completed){
    //        return{...response[0], project_completed: false}
    //    } else {
    //         return{...response[0], project_completed: true}
    //    }

    await db('projects')
        .insert(project)
    const newProject = await db('projects')
        .where('project_name', project.project_name)
        .first()

        if(newProject.project_completed === 0){
            return{
                ...newProject,
                project_completed: false
            }
        } else {
            return{
                ...newProject,
                project_completed: true
            }
        }

}

module.exports = {
    getAll,
    addProject
}