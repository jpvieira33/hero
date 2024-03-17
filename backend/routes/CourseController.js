import express from 'express';
let router = express.Router();

import courseService from '../services/courseService.js'

router.post("/addCourse", async (req,res) => {
    const courseModel = {
       name: req.body.name
    }

    const course = await courseService.saveCourse(courseModel);
    return res.status(200).json(course);
});

router.get("/getAllCourses", async(req, res) => {
   const allcourses = await courseService.getAllCourse();
   return res.status(200).json(allcourses);
});

router.get("/course/:id", async(req, res) => {
    const course = await courseService.getCourseById(req.params.id)
    return res.status(200).json(course);
 });

 router.delete("/deleteCourse/:id", async(req, res) => {
    const course = await courseService.deleteCourseById(req.params.id)
    return res.status(200).json(course);
 });

 router.put("/updateCourse/:id", async (req,res) => {
    const courseModel = {
      name: req.body.name
    }

    const course = await courseService.updateCourse(req.params.id, courseModel);
    return res.status(200).json(course);
});

export default router;