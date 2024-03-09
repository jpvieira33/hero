import express from 'express';
let router = express.Router();

import evaluationService from '../services/evaluationService.js'

router.post("/addEvaluation", async (req,res) => {
    const evaluationModel = {
       first_name: req.body.first_name,
       last_name: req.body.last_name,
       email: req.body.email,
       gender: req.body.gender
    }

    const evaluation = await evaluationService.saveEvaluation(evaluationModel);
    return res.status(200).json(evaluation);
});

router.get("/getAllEvaluations", async(req, res) => {
   const allEvaluations = await evaluationService.getAllEvaluation();
   return res.status(200).json(allEvaluations);
});

router.get("/evaluation/:id", async(req, res) => {
    const evaluation = await evaluationService.getEvaluationById(req.params.id)
    return res.status(200).json(evaluation);
 });

 router.delete("/deleteEvaluation/:id", async(req, res) => {
    const evaluation = await evaluationService.deleteEvaluationById(req.params.id)
    return res.status(200).json(evaluation);
 });

 router.put("/updateEvaluation/:id", async (req,res) => {
    const evaluationModel = {
       first_name: req.body.first_name,
       last_name: req.body.last_name,
       email: req.body.email,
       gender: req.body.gender
    }

    const evaluation = await evaluationService.updateEvaluation(req.params.id, evaluationModel);
    return res.status(200).json(evaluation);
});

export default router;