import express from 'express';
import multer from 'multer';
import process from 'process';
import userService from '../services/userService.js'

let router = express.Router();
let storage = multer.diskStorage({
   destination: function(req, file, callback){
      callback(null, './images')
   },
   filename: function(req, file, callback){
      callback(null, req.body.first_name + "_" + req.body.last_name + "_" + Date.now() + file.originalname)
   }
});

const upload = multer({
   storage: storage
}).single('file')

router.post("/addUser", async (req,res) => {
   upload(req, res, async function(err){
      const userModel = {
         first_name: req.body.first_name,
         last_name: req.body.last_name,
         email: req.body.email,
         gender: req.body.gender,
         profile_picture: req.file.path
      }

      if(err){
         return res.end("Error uploading file.")
      }
  
      const user = await userService.saveUser(userModel);
      return res.status(200).json(user);
   });

});

router.get("/getAllUsers", async(req, res) => {
   const allUsers = await userService.getAllUser();
   return res.status(200).json(allUsers);
});

router.get("/user/:id", async(req, res) => {
    const user = await userService.getUserById(req.params.id)
    return res.status(200).json(user);
 });

 router.delete("/deleteUser/:id", async(req, res) => {
    const user = await userService.deleteUserById(req.params.id)
    return res.status(200).json(user);
 });

 router.put("/updateUser/:id", async (req,res) => {
   upload(req, res, async function(err){

      const userModel = {
         first_name: req.body.first_name,
         last_name: req.body.last_name,
         email: req.body.email,
         gender: req.body.gender,
         profile_picture: req.file.path
      }

      if(err){
         return res.end("Error uploading file.")
      }

      const user = await userService.updateUser(req.params.id, userModel);
      return res.status(200).json(user);
   });

});

router.get('/userImage/:id', async function(req, res){
    const user = await userService.getUserById(req.params.id)
    res.sendFile(process.cwd() + "\\" + user.profile_picture)
})

export default router;