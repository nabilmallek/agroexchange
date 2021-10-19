const mongoose = require('mongoose')

const schema = mongoose.Schema

const posteSchema = new schema({
    image:{type:String},
    product:{type:String,required:true},
    quantity:String,
   country:{type:String,required:true},
    email:{type:String,required:true},
    phone:String,
    announcement :String
})

const Poste = mongoose.model("Postes",posteSchema)
module.exports = Poste