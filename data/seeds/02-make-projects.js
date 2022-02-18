const projects = [
    {project_name: 'Project 1', project_description: 'description for project 1', project_completed: false},
    {project_name: 'Project 2', project_description: 'description for project 2', project_completed: true},
    {project_name: 'Project 3', project_description: 'description for project 3', project_completed: true},
    {project_name: 'Project 4', project_description: 'description for project 4', project_completed: false},
]

const resources = [
    { resource_name: 'resource 1', resource_description: 'resource 1 description'},
    { resource_name: 'resource 2', resource_description: 'resource 2 description'},
    { resource_name: 'resource 3', resource_description: 'resource 3 description'},
    { resource_name: 'resource 4', resource_description: 'resource 4 description'},
]

const tasks = [
    {task_description: 'task 1', task_notes: 'notes for task 1', task_completed: false, project_id: 1},
    {task_description: 'task 2', task_notes: 'notes for task 2', task_completed: true, project_id: 4},
    {task_description: 'task 3', task_notes: 'notes for task 3', task_completed: false, project_id: 1},
    {task_description: 'task 4', task_notes: 'notes for task 4', task_completed: true, project_id: 2},
    {task_description: 'task 5', task_notes: 'notes for task 5', task_completed: true, project_id: 3},
    {task_description: 'task 6', task_notes: 'notes for task 6', task_completed: false, project_id: 2},
    {task_description: 'task 7', task_notes: 'notes for task 7', task_completed: false, project_id: 4},
    {task_description: 'task 8', task_notes: 'notes for task 8', task_completed: true, project_id: 3},
    {task_description: 'task 9', task_notes: 'notes for task 8', task_completed: false, project_id: 1},
]

const assingedProjects = [
    {project_id: 1, resource_id: 1, task_id: 9},
    {project_id: 1, resource_id: 2, task_id: 2},
    {project_id: 1, resource_id: 2, task_id: 3},

    {project_id: 2, resource_id: 3, task_id: 5},
    {project_id: 2, resource_id: 1, task_id: 4},
    {project_id: 2, resource_id: 2, task_id: 1},

    {project_id: 3, resource_id: 1, task_id: 7},
    {project_id: 3, resource_id: 2, task_id: 6},
    {project_id: 3, resource_id: 4, task_id: 3},

    {project_id: 4, resource_id: 4, task_id: 1},
    {project_id: 4, resource_id: 3, task_id: 3},
    {project_id: 4, resource_id: 2, task_id: 5},
]

exports.seed = async function(knex) { 
    await knex('projects').insert(projects)
    await knex('tasks').insert(tasks)
    await knex('resources').insert(resources)
    await knex('resource_assignment').insert(assingedProjects)
}