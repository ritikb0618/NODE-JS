// console.log(process.argv[2]);

// const fs =require('fs');

// const yoyo = process.argv;
// fs.writeFileSync(yoyo[2],yoyo[3]);

const fs=require('fs');
const input=process.argv; // process is in general a very heavy object
if(input[2]=='add')
{
    fs.writeFileSync(input[3],input[4])
}

else if(input[2]=='remove')
{
    fs.unlinkSync(input[3])
}

else[
    console.warn("enter valid input")
]