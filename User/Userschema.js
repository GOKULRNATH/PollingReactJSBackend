const mongoose=require('mongoose')

const userschema=mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    option1:{
        type:String
    },
    option2:{
        type:String
    },
    option3:{
        type:String
    },
    option4:{
        type:String
    }
    
})

module.exports=mongoose.model("users",userschema)//("db collection", variable top)