const mongoose = require('mongoose')

module.exports = mongoose.model('Volunteer',{
     
    fullName: { type: String } ,
    age: { type: Number } ,
    mobile: { type: Number } ,  
    location: { type: String } ,
  } )