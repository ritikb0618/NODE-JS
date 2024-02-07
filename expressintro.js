const express=require('express');
const app=express();

app.get('',(req,resp)=>
{
    resp.send('hi, this is welcome page');
})

app.get('/about',(req,resp)=>
{
    resp.send('hi, this is about page');
})

app.get('/ help',(req,resp)=>
{
    resp.send('hi, this is help page');
})

app.listen(4500)