const express = require('express');
const dbConnect = require('./config/dbConnect');
const app= express()
const dotenv=require('dotenv').config()
const PORT=process.env.PORT||4000;
const authRouter=require("./routes/authRoutes");
const bodyParser = require('body-parser');
const cors = require("cors")
const { notFound, errorHandler } = require('./middlewares/errorHandler');
dbConnect();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/",authRouter)
app.use(notFound);
app.use(errorHandler);


app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`);
})