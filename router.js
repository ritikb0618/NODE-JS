const express=require('express'); 
const app = express();

const reqFilter= require('./middleware')
const route=express.Router()

route.use(reqFilter)

app.get('/home',(req,resp)=>
{
    resp.send("Welcome to home page");
})

route.get('/profile',(req,resp)=>
{
    resp.send("Welcome to profile page");
})

app.get('/about',(req,resp)=>
{
    resp.send("Welcome to about page");
})

app.use('/',route);

app.listen(2000)