const { error } = require('console');
const fs=require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files');

console.warn(dirPath);

for(i=0;i<5;i++){
    fs.writeFileSync( dirPath +"/hello"+i+".txt","A text file for test");
}

fs.readdir(dirPath,(error,files)=>
{
    files.forEach((files)=>
    {
        console.log("Your file is",files)
    })
})