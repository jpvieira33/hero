import Evaluation from '../models/Evaluations.js'

const saveEvaluation = async (evaluationModel) =>{
    const save = Evaluation.create(evaluationModel);
    return save;
}

const getAllEvaluation = async () =>{
    return await Evaluation.findAll(
        {
         order: [
             ['id', 'ASC']
         ]
        }
    )
}

const getEvaluationById = async (id) =>{
    return await Evaluation.findByPk(id);
}

const deleteEvaluationById = async (id) =>{
    return await Evaluation.destroy({where: {id:id}})
}

const updateEvaluation = async (id, evaluationModel) =>{
    try {
        const result = await Evaluation.update(evaluationModel, {where: {id:id}});
        if(result[0] === 1){
            return {message: "Evaluation updated with success"}
        }else{
            return { message: "Cannot find ${id} to update", status: 404}
        }
        
    } catch (error) {
        console.log(error)
    }
}

const factory = {
    saveEvaluation,
    getAllEvaluation,
    getEvaluationById,
    deleteEvaluationById,
    updateEvaluation
};

export default factory;