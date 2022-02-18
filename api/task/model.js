// build your `Task` model here
const db = require('../../data/dbConfig')

async function getAll(){
    // const allData = await db('resources')
    // return allData
    return Promise.resolve('All your tasks should be here')
}

function addTask(){
    return Promise.resolve('You can post a task like this.')
}

module.exports = {
    getAll,
    addTask
}