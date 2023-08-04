const express= require('express');
const cors=require("cors")
const db=require("./DBconnection")
const routes=require("./routes")//from routes.js
const app=express()
const bodyparser=require('body-parser');
const PORT=process.env.PORT||4000

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(cors())
app.use(express.static(`${__dirname}/upload`));
app.use("/poll",routes)
// app.get('/message', (req, res) => {
//     res.json({
//       message: "Done"
//     });
//   });

app.listen(PORT,()=>{
    console.log("Server created successfully");
})