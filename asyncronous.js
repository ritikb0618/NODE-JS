let a=20;
let b=90;

let newData = new Promise((resolve,reject)=>
{
    setTimeout(() => {
        resolve(30);
    }, 2000);
})

newData.then((data)=>
{
    b=data;
    console.warn(a+b);
})