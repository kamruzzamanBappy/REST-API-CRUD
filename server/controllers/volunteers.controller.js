const express = require('express')
const router = express.Router()
const ObjectId = require('mongoose').Types.ObjectId

const Volunteer = require('../models/volunteers.model')
const {generateCrudModels, generateCrudMethods} = require('../services/index')
const volunteersCrud = generateCrudMethods(Volunteer)

const {volidateDbId,raiseRecord404Error} = require('../middlewares/index')


router.get('/test',
    (req,res,next) =>{ next({})}, 
    (req,res) =>{res.send('foo')}
)


router.get('/',(req,res,next) => {

    volunteersCrud.getAll()
    .then(data => res.send(data))
    .catch(err => next(err))

})

router.get('/:id', volidateDbId, (req,res) => {
   volunteersCrud.getById(req.params.id)
    .then(data =>{
        if(data)
            res.send(data)
        else
         raiseRecord404Error(req,res)
    })
    .catch(errr =>  next(err))
})





router.post('/',(req,res) => {
volunteersCrud.create(req.body)
.then(data => res.status(201).json(data))
.catch(err => console.log(err))
})

router.put('/:id', volidateDbId, (req,res) =>{
    volunteersCrud.update(req.params.id,req.body)
.then(data => {
    if(data) res.send(data)
        else raiseRecord404Error(req,res)
})
.catch(err => next(err))

 })
router.delete('/:id', volidateDbId, (req,res) =>{ } )


module.exports = router;