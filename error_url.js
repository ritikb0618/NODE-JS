const express=require('express');
const path=require('path');

const app=express();
const Path = path.join(__dirname, 'HTML')


app.get('',(req,resp)=>
{
    resp.sendFile(`${Path}/about.html`);
})

app.get('*',(req,resp)=>
{
    resp.sendFile(`${Path}/404.html`);
})

app.listen(4000);