import express from 'express'
let router = express.Router();

import userController from './UserController.js';
import courseController from './CourseController.js';
import evaluationController from './EvaluationController.js';
import professorController from './ProfessorController.js';

router.get("/", (req, res) =>{
 console.log("Oi")
 res.status(200).json({message: "oi"})
});

router.use("/", userController);
router.use("/", courseController);
router.use("/", evaluationController)
router.use("/", professorController);

export default router;