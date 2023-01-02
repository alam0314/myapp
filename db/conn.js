const mongoose = require("mongoose");
const dotenv=require('dotenv');
dotenv.config();


const port=process.env.PORT;
mongoose.set("strictQuery", false);
const url=process.env.DATABASE;
mongoose.connect(url,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("DATABASE CONNECTED")).catch((err)=>{
    console.log(err)
})
