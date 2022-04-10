const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const helmet=require('helmet');
const morgan=require('morgan');
const SignupPage=require('./routes/Signup');
const SignputPage=require('./routes/Signput');
const postRoute=require('./routes/posts');
const profileRoute=require('./routes/ProfileRoute');
const commentRoute=require('./routes/comment');
const forgotpassRoute=require('./routes/Forgotpass');

dotenv.config();

const app=express();

mongoose.connect(process.env.MONGO_URL,
  {useNewUrlParser:true, 
   useUnifiedTopology: true,
  }).then(()=>console.log("Connected To MongoDB Atlas"))
    .catch(err=>console.log('Could  Not Connect To MongoDB',err));

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use('/',SignupPage);
app.use('/',SignputPage);
app.use('/posts',postRoute);
app.use('/profile',profileRoute); 
app.use('/comment',commentRoute);
app.use('/forgotpass',forgotpassRoute);



const port=process.env.PORT || 3000
app.listen(port,()=>console.log(`BackEnd Server Connected To ${port}`));