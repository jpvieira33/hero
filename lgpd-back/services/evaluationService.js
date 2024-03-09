import evaluationRepository from '../repositories/evaluationRepository.js';

const saveEvaluation = (evaluationModel) =>{
    return evaluationRepository.saveEvaluation(evaluationModel);
}

const getEvaluationById = (id) =>{
    return evaluationRepository.getEvaluationById(id);
}

const getAllEvaluation = () =>{
    return evaluationRepository.getAllEvaluation();
}

const deleteEvaluationById = (id) =>{
    return evaluationRepository.deleteEvaluationById(id);
}

const updateEvaluation = (id, evaluationModel) =>{
    return evaluationRepository.updateEvaluation(id, evaluationModel);
}

const service = {
    saveEvaluation,
    getEvaluationById,
    getAllEvaluation,
    deleteEvaluationById,
    updateEvaluation
};

export default service;