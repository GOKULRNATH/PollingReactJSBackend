const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/pollingbackend")
var db=mongoose.connection
db.on("error",console.error.bind("error"))
db.once("open",function(){
    console.log("connection successful")
})
//DBCONNECTION

module.exports=db