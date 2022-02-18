// build your `Resource` model here
const db = require('../../data/dbConfig')

async function getAll(){
    // const allData = await db('resources')
    // return allData
    return Promise.resolve('All your resources should be here')
}

function addResource(){
    return Promise.resolve('You can post a resource like this.')
}

module.exports = {
    getAll,
    addResource
}