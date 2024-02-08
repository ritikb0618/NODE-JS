const express=require('express');
const path=require('path');

const app=express();
const Path=path.join(__dirname,'HTML')

app.use(express.static(Path));

app.listen(4500);