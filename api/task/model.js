// build your `Task` model here
const db = require('../../data/dbConfig')

async function getAll(){
   const allData = await db('tasks as tk')
   .leftJoin('projects as pr', 'tk.project_id', 'pr.project_id')
   .select('tk.task_id', 'tk.task_description', 'tk.task_notes', 'tk.task_completed', 'pr.project_name', 'pr.project_description')
   .groupBy('tk.task_id')
   .orderBy('tk.task_id')
   
   return allData.map(task => {
    if(task.task_completed === 1){
        return {
            ...task,
            task_completed : true,
        }
    } else {
        return {
            ...task,
            task_completed : false,
        }
    }
})

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
                task_completed: true
            }
        }
        
}

module.exports = {
    getAll,
    addTask
}