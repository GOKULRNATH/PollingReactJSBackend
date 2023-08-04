const mongoose=require('mongoose')

const radioschema=mongoose.Schema({
    qustid:{
        type:String,
    },
    pollOption:{
        type:String
    }
    
})

module.exports=mongoose.model("radio",radioschema)//("db collection", variable top)