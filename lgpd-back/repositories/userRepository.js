import User from '../models/User.js'

const saveUser = async (userModel) =>{
    const save = User.create(userModel);
    return save;
}

const getAllUser = async () =>{
    return await User.findAll(
        {
         order: [
             ['id', 'ASC']
         ]
        }
    )
}

const getUserById = async (id) =>{
    return await User.findByPk(id);
}

const deleteUserById = async (id) =>{
    return await User.destroy({where: {id:id}})
}

const updateUser = async (id, userModel) =>{
    try {
        const result = await User.update(userModel, {where: {id:id}});
        if(result[0] === 1){
            return {message: "user updated with success"}
        }else{
            return { message: "Cannot find ${id} to update", status: 404}
        }
        
    } catch (error) {
        console.log(error)
    }
}


const factory = {
    saveUser,
    getAllUser,
    getUserById,
    deleteUserById,
    updateUser
};

export default factory;