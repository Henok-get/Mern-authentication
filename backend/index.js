import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'
const app=express()

dotenv.config()
app.use(express.json());
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("connected to db")
}).catch((err)=>{
    console.log(err)
})

app.use('/api/user',userRoute)
app.use('/api/signup',authRoute)
 
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    const message =err.message||'internal server error'
    return res.status(statusCode).json({
        success:false,
      message,
        statusCode:statusCode,

    })
})


app.listen(3000,()=>{
   
        console.log("server started on 3000");
    
    })
    