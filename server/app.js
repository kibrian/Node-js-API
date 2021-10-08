const express = require('express');
const mysql = require('mysql');
const bodyparser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({extends: true}))


app.listen(3000,(req,res)=>{
    console.log(`app listening on port ${port}`)
})