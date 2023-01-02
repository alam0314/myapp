require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const router = require("./Routes/router");
const path=require('path');

const port = 6002 || process.env.PORT;
app.use(cors());
app.use(express.json());

app.use(router)

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.listen(port,()=>{
    console.log(`Server Started at Port No:${port}`);
})