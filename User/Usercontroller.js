// const { options } = require('../routes');
const  schemapoll=require('./Userschema')
// const multer = require('multer');

    

//User Add poll
const addpoll=(req,res)=>{
    console.log("addpoll")
    // res.send("Api worked")
    const newpoll=new schemapoll({
        //schama name:req.body.frontend name
        question:req.body.question,
        option1:req.body.option1,
        option2:req.body.option2,
        option3:req.body.option3,
        option4:req.body.option4
    })
    newpoll.save()//save is mangoos function
    .then(data=>{     //saved document in mongoo
        console.log(data)
        res.send(data)//callback function calling data in data
    })     
    .catch(error=>{
        console.log(error)
        res.send(error)
    })
}

//view poll
const viewpoll= (req, res) => {
    schemapoll.find().exec()
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


module.exports={addpoll,viewpoll}