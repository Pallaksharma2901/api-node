const { Router } = require("express");
const { getUser, userUpdate, userlogin, deleteUser } = require("../controllers/user.Controller");
const { create } = require("../models/userSchema");

const user_router=Router();

 user_router.post('/',create);
 user_router.post('/login',userlogin)
 user_router.get('/data',getUser);
 user_router.patch('/update/:id',userUpdate);
 user_router.delete('/delete/:id',deleteUser);
 user_router.post('/login',userlogin)

module.exports= user_router;