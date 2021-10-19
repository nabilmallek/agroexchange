const mongoose = require('mongoose')

const schema = mongoose.Schema

const callSchema = new schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    textarea:{type:String,required:true},
    
})

const Call = mongoose.model("Calls",callSchema)
module.exports = Call