const path = require('path');
const Path = path.join(__dirname,'website')

module.exports= reqFilter = (req,resp,next)=>
{
    if(!req.query.age)
    {
        resp.sendFile(`${Path}/age.html`);
    }

    else if(req.query.age<18)
    {
        resp.sendFile(`${Path}/valid_age.html`);
    }

    else
    {
        next();
    }
}