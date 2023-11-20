const User=require("../models/userModel")
const Workshop=require("../models/workshopModel")
const asyncHandler = require('express-async-handler');
const nodemailer = require('nodemailer');

// const workshops=['workshop1','workshop2','workshop3','workshop4']
// const workshopCapacities={
//     'workshop1':40,
//     'workshop2':40,
//     'workshop3':40,
//     'workshop4':40,
// }
const countCheck=async(req,res)=>{
    const workshopData=await Workshop.find()
    let data = []
    workshopData.map((value)=>{
        data.push({workshop:value.name,count : value.count})
    });
    res.json({data})    
}

const registerUser=asyncHandler(async(req,res)=>{
    
    const {email,name,workshop,mobile}=req.body;
    const workshopData=await Workshop.findOne({name:workshop})
    const count=workshopData.count;
    const findUser=await User.findOne({email:email});
    const findMobile = await User.findOne({mobile:mobile})
    if(count>0){
        if(!findUser && !findMobile){
   
            //Create a new user 
           const newUser=await User.create(req.body);
           await Workshop.findOneAndUpdate(
            { name: workshop },
            { $inc: { count: -1 } }
          );
           sendMail(email,name,workshop)
           res.send({newUser, message:"user added successfully" , success: true})
     
   }else{
       //User already exists
       res.send({ message:"user already exist" , success: false})
       throw new Error("User Already Exist")

   }
    }else{
        res.send({ message:"user at full capacity " , success: false})
       throw new Error('Department at full capacity. Registration not allowed.')


    }
    
})

const sendMail=(email,name,workshop)=>{
    const transporter=nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: "shyamkumaratech@gmail.com",
          pass: process.env.PASSWORD,
        },
    })
    const mailOptions = {
        from: "shyamkumaratech@gmail.com",
        to: email,
        subject: 'Registration Confirmation',
        text: `Hi ${name},
        Thank you for registering for ${workshop}.`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Email has been sent:-", info.response);
        }
      });
}


module.exports={registerUser,countCheck}