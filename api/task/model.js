// build your `Task` model here
const db = require('../../data/dbConfig')

async function getAll(){
   return await db('tasks as tk')
   .leftJoin('projects as pr')
   .select('tk.task_id', 'task_description', 'task_notes', 'task_completed', 'pr.project_name', 'pr.project_description')
   .orderBy('task_id')
   .limit(15)
}

async function addTask(task){
    await db('tasks')
        .insert(task)
    const newTask = await db('tasks')
        .where('task_description', task.task_description)
        .first()

        if(newTask.task_completed === 0){
            return {
                ...newTask,
                task_completed: false
            }
        } else {
            return {
                ...newTask,
                task_completed: false
            }
        }
        
}

module.exports = {
    getAll,
    addTask
}