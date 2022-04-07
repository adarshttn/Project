const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const helmet=require('helmet');
const morgan=require('morgan');
const SignupPage=require('./routes/Signup');
const SignputPage=require('./routes/Signput');
const postRoute=require('./routes/posts');
dotenv.config();

const app=express();

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use('/',SignupPage);
app.use('/',SignputPage);
app.use('/posts',postRoute);


mongoose.connect(process.env.MONGO_URL,
    {useNewUrlParser:true, 
     useUnifiedTopology: true,
    }).then(()=>console.log("Connected To MongoDB Atlas"))
      .catch(err=>console.log('Could  Not Connect To MongoDB',err));


const port=process.env.PORT || 3000
app.listen(port,()=>console.log(`BackEnd Server Connected To ${port}`));