const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    companyName:{
        type:String,
        required:true
    },
    workshop:{
        type:String,
        required:true
    },
    timestamp: {
        type: Date,
        default: Date.now,
      },

})

module.exports=mongoose.model("user",userSchema);