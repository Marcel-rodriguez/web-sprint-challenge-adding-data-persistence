// build your `Resource` model here
const db = require('../../data/dbConfig')

async function getAll(){
    return db('resources')
}

async function addResource(resource){
    await db('resources')
        .insert(resource)
    return await db('resources')
        .where('resource_name', resource.resource_name)
        .first()
}

module.exports = {
    getAll,
    addResource
}