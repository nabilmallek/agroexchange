const express = require('express')
const router = express.Router()
const Poste = require('../Models/Poste')


router.post('/', async (req,res)=>{
    try {
       const newPoste = new Poste(req.body)
       const result = await newPoste.save()
       res.send({response:result,msg:'poste saved'}) 
    } catch (error) {
        res.send({msg:`poste cannot saved ${error}`})
    }
})
router.get('/',async (req,res)=>{
    try {
        const result = await  Poste.find()
        res.send({responsed:result,msg:'getted succesfully'})
    } catch (error) {
        res.send({msg:`poste cannot saved ${error}`})
    }
})

router.get('/:id',async (req,res)=>{
    try {
        const result = await  Poste.findOne({_id:req.params.id})
        res.send({responsed:result,msg:' poste getted succesfully'})
    } catch (error) {
        res.send({msg:`poste cannot saved ${error}`})
    }
})
router.delete('/:id',async (req,res)=>{
    try {
        const result = await Poste.findByIdAndDelete({_id:req.params.id})
        res.send({responsed:result,msg:'poste deleted'})
    } catch (error) {
        res.send({msg:`poste cannot deleted ${error}`})
        
    }
})
 
router.put('/:id',async (req,res)=>{
    try {
     const result = await  Poste.updateOne({_id:req.params.id},{$set:{...req.body}})  
     res.send('poste updated')
    } catch (error) {
       res.send('cannot updated poste') 
    }
})


module.exports = router