const mongoose = require('mongoose')

const dbUri ='mongodb+srv://admin:1234@cluster0.ddazk.mongodb.net/volunteer_db?retryWrites=true&w=majority&appName=Cluster0'

mongoose.set('strictQuery',false)
module.exports = () =>{
    return mongoose.connect(dbUri )
}