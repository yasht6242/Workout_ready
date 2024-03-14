const dotenv = require('dotenv')
dotenv.config();

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')


//express app
const app = express() 


//to use a middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts',workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log('listening on port 4000!')
        })
    })
    .catch((error) =>{
        console.log(error)
    })

//to listen for requests


process.env