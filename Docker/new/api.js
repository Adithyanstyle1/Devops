const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


app.use(bodyParser.urlencoded());

app.post('/api',(res,req,next)=>{
    res.sendFile(path.join(__dirname,'res.html'))
})

app.listen(9000);