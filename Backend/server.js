const express=require('express');
const app=express();
const dotenv=require('dotenv');
require('dotenv').config();
const cors=require('cors');
const PORT=process.env.PORT;
require('./db/connection');
app.use(cors());

app.listen(PORT,()=>{
    console.log(`Server running at PORT ${PORT}`);
})