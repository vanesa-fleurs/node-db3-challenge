const db = require('../data/db-config.js')
module.exports = {
    find, 
    findById,
    findSteps,
    add,
    addStep,
    update, 
    remove
}

function find(){
    return db('schemes')
}

async function findById(id){
   const finding = await db('schemes').where({ id }).first()
   if(!finding){
       return null
   }
}

function findSteps(id){
    return 
}