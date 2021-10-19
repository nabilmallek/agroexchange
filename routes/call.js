const express = require('express')
const router = express.Router()
const Call = require('../Models/call')


router.post('/', async (req,res)=>{
    try {
       const newCall = new Call(req.body)
       const result = await newCall.save()
       res.send({response:result,msg:'call saved'}) 
    } catch (error) {
        res.send({msg:`call cannot saved ${error}`})
    }
})
router.get('/',async (req,res)=>{
    try {
        const result = await  Call.find()
        res.send({responsed:result,msg:'getted succesfully'})
    } catch (error) {
        res.send({msg:`call cannot saved ${error}`})
    }
})

router.get('/:id',async (req,res)=>{
    try {
        const result = await  Call.findOne({_id:req.params.id})
        res.send({responsed:result,msg:' call getted succesfully'})
    } catch (error) {
        res.send({msg:`poste cannot saved ${error}`})
    }
})
router.delete('/:id',async (req,res)=>{
    try {
        const result = await Call.findByIdAndDelete({_id:req.params.id})
        res.send({responsed:result,msg:'call deleted'})
    } catch (error) {
        res.send({msg:`call cannot deleted ${error}`})
        
    }
})
 



module.exports = router