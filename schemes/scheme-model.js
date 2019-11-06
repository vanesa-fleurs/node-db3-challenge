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
    return db('schemes');
}

async function findById(id){
    try{
        const finding = await db('steps').where({ id }).first()
        if(finding){
            return finding;
        } 
        else{
            return null;
        }
    }
    catch(error){
        console.error(error)
    }
}

function findSteps(id){
    return db('steps').select('schemes.scheme_name', 'steps.step_number', 'steps.instructions')
        .where({ scheme_id: id })
        .join('schemes', 'schemes.id', 'steps.scheme_id')
}

async function add(dataScheme){
    try{
        //destructure the id gotten back from insert
        const [id] = await db('schemes').insert(dataScheme);
        if(adding){
            const newScheme = await db('steps').findById(id);
            // console.table(newScheme); //logs objects (with key-value pairs)
            return newScheme;
        }
    }
    catch(error){
        console.error(error)
    }
}

async function update(changes, id){
    try{
        const updating = await db('schemes').update(changes).where({ id }) //resolves to 1 or 0
        const updated = await db('schemes').findById(id)
        return updated;
    }
    catch(error){
        console.error(error)
    }
}

async function remove(id){
    try{
        const schemeinQ = await db('schemes').where({ id }).first();
        
        if(schemeinQ){
            const removing = await db('schemas').delete(id);
            return schemeinQ;
        }
        else{
            return null;
        }
    }
    catch(erro){
        console.error(erro);
    }
}