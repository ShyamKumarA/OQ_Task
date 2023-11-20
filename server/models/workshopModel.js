const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var workshopSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },  
    count:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    }
    
});

//Export the model
module.exports = mongoose.model('workshop', workshopSchema);