const  radioschema=require('./Radioschema')
// const multer = require('multer');

    

//User Add poll
const radiovalue=(req,res)=>{
    console.log("radiovalue")
    // res.send("Api worked")
    const {id}=req.params
    const newradiovalue=new radioschema({
        //schama name:req.body.frontend name
        qustid:id,
        pollOption:req.body.pollOption
    })
    newradiovalue.save()//save is mangoos function
    .then(data=>{     //saved document in mongoo
        console.log(data)
        res.send(data)//callback function calling data in data
    })     
    .catch(error=>{
        console.log(error)
        res.send(error)
    })
}

// view radio option
const viewoption= (req, res) => {
    const{id}=req.params
    radioschema.find({qustid:id}).exec()
      .then(data => {
        console.log(data);
          res.json({
            status: 200,
            msg: "Data obtained successfully",
            data: data
          });
    
      })
      .catch(err => {
        res.status(500).json({
          status: 500,
          msg: "Something went wrong",
          error: err.message // Sending just the error message to the client for simplicity
        });
      });
  };
module.exports={radiovalue,viewoption}