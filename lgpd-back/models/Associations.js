import User from "./User.js";
import Course from "./Course.js";
import Evaluation from "./Evaluations.js";
import Professor from "./Professor.js";

const associations = () => {
    Course.hasMany(Professor);
    User.hasMany(Evaluation);
    Course.hasMany(Evaluation)
}

const factory = {
    associations
}

export default factory;