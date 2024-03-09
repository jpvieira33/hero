import courseRepository from '../repositories/courseRepository.js';

const saveCourse = (courseModel) =>{
    return courseRepository.saveCourse(courseModel);
}

const getCourseById = (id) =>{
    return courseRepository.getCourseById(id);
}

const getAllCourse = () =>{
    return courseRepository.getAllCourse();
}

const deleteCourseById = (id) =>{
    return courseRepository.deleteCourseById(id);
}

const updateCourse = (id, courseModel) =>{
    return courseRepository.updateCourse(id, courseModel);
}

const service = {
    saveCourse,
    getCourseById,
    getAllCourse,
    deleteCourseById,
    updateCourse
};

export default service;