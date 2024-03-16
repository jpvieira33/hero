import professorRepository from '../repositories/professorRepository.js';

const saveProfessor = (professorModel) =>{
    return professorRepository.saveProfessor(professorModel);
}

const getProfessorById = (id) =>{
    return professorRepository.getProfessorById(id);
}

const getAllProfessor = () =>{
    return professorRepository.getAllProfessor();
}

const deleteProfessorById = (id) =>{
    return professorRepository.deleteProfessorById(id);
}

const updateProfessor = (id, professorModel) =>{
    return professorRepository.updateUser(id, professorModel);
}

const service = {
    saveProfessor,
    getProfessorById,
    getAllProfessor,
    deleteProfessorById,
    updateProfessor
};

export default service;