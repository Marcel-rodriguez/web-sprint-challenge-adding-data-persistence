// build your `Project` model here
const db = require('../../data/dbConfig')

async function getAll(){
    // const allData = await db('projects')
    // return allData

    return Promise.resolve('All your projects should be here')
}

function addProject(){
    return Promise.resolve('You can post a project like this.')
}

module.exports = {
    getAll,
    addProject
}