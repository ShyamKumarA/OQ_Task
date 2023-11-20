const express = require('express');
const { registerUser,countCheck } = require('../controller/registerController');
const router=express.Router();


router.get("/getCount",countCheck)
router.post("/register",registerUser)


module.exports=router