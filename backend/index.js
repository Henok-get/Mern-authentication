import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'
import cookieParser from 'cookie-parser';
const app=express()

dotenv.config()
app.use(express.json());
mongoose.connect(process.env.MONGO_LOCAL).then(()=>{
    console.log("connected to db")
}).catch((err)=>{
    console.log(err)
})
app.use(cookieParser());
 
app.use('/api/user',userRoute)
app.use('/api/auth',authRoute)

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    const message =err.message||'internal server error'
    return res.status(statusCode).json({
        success:false,
      message,
        statusCode,

    })
})


app.listen(3000,()=>{
   
        console.log("server started on 3000");
    
    })
    