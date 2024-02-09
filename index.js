const express = require('express');
const path =require('path')

const Path=path.join(__dirname,'website')
const app= express()

const reqFilter= require('./middle')
const route = express.Router();

route.use(reqFilter);

route.get('/home',(req,resp)=>
{
    resp.sendFile(`${Path}/contact.html`)
})
app.use('/',route)

app.listen(4600)