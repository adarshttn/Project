const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const helmet=require('helmet');
const morgan=require('morgan');
dotenv.config();

const app=express();

mongoose.connect(process.env.MONGO_URL,
    {useNewUrlParser:true, 
     useUnifiedTopology: true,
    }).then(()=>console.log("Connected To MongoDB Atlas"))
      .catch(err=>console.log('Could  Not Connect To MongoDB',err));

app.listen(8800,()=>{
    console.log('Backend server  is running');
})