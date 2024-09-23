const express = require('express')
const bodyParser = require('body-parser')

//local im
const connectDb = require('./db.js')
const volunteersRoutes = require('./controllers/volunteers.controller')

const {errorHandler} = require('./middlewares')


const app = express()



//middleware

app.use(bodyParser.json())
app.use('/api/volunteers',volunteersRoutes)
app.use(errorHandler)


connectDb().then(() =>{
    console.log('db connection succeed');
    app.listen(3000,()=>
        console.log('server started at 3000'))
})
.catch(err => console.log(err))