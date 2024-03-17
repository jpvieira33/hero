import express from 'express';
let router = express.Router();

import professorService from '../services/professorService.js'

router.post("/addProfessor", async (req,res) => {
    const professorModel = {
       name: req.body.name,
       course_id: req.body.course_id,
    }

    const professor = await professorService.saveProfessor(professorModel);
    return res.status(200).json(professor);
});

router.get("/getAllProfessors", async(req, res) => {
   const allProfessors = await professorService.getAllProfessor();
   return res.status(200).json(allProfessors);
});

router.get("/professor/:id", async(req, res) => {
    const professor = await professorService.getProfessorById(req.params.id)
    return res.status(200).json(professor);
 });

 router.delete("/deleteProfessor/:id", async(req, res) => {
    const professor = await professorService.deleteProfessorById(req.params.id)
    return res.status(200).json(professor);
 });

 router.put("/updateProfessor/:id", async (req,res) => {
   const professorModel = {
      name: req.body.name,
      course_id: req.body.course_id,
   }

    const professor = await professorService.updateProfessor(req.params.id, professorModel);
    return res.status(200).json(professor);
});

export default router;