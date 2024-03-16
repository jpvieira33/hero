import Professor from '../models/Professor.js'

const saveProfessor = async (professorModel) =>{
    const save = Professor.create(professorModel);
    return save;
}

const getAllProfessor = async () =>{
    return await Professor.findAll(
        {
         order: [
             ['id', 'ASC']
         ]
        }
    )
}

const getProfessorById = async (id) =>{
    return await Professor.findByPk(id);
}

const deleteProfessorById = async (id) =>{
    return await Professor.destroy({where: {id:id}})
}

const updateProfessor = async (id, professorModel) =>{
    try {
        const result = await Professor.update(professorModel, {where: {id:id}});
        if(result[0] === 1){
            return {message: "Professor updated with success"}
        }else{
            return { message: "Cannot find ${id} to update", status: 404}
        }
        
    } catch (error) {
        console.log(error)
    }
}

const factory = {
    saveProfessor,
    getAllProfessor,
    getProfessorById,
    deleteProfessorById,
    updateProfessor
};

export default factory;