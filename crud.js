const { error } = require('console');
const fs = require('fs');
const path = require('path');

const dirPath=path.join(__dirname,'crud');
const filePath= `${__dirname}/apple.txt`;

// create
fs.writeFileSync(filePath,"It is a fruit");

// read
fs.readFile(filePath,'utf8',(error,item)=>
{
    console.log(item);
})

// append
fs.appendFile(filePath,' and it is very tasty',(error)=>
{
    if(!error)
    {
        console.log("The file is appended");
    }
})