import userRepository from '../repositories/userRepository.js';

const saveUser = (userModel) =>{
    return userRepository.saveUser(userModel);
}

const getUserById = (id) =>{
    return userRepository.getUserById(id);
}

const getAllUser = () =>{
    return userRepository.getAllUser();
}

const deleteUserById = (id) =>{
    return userRepository.deleteUserById(id);
}

const updateUser = (id, userModel) =>{
    return userRepository.updateUser(id, userModel);
}


const service = {
    saveUser,
    getUserById,
    getAllUser,
    deleteUserById,
    updateUser
};

export default service;