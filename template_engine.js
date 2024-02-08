const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/profile', (req, resp) => {
    const user = {
        name: "Ritik",
        email: "yoyo@gmail.com",
        city: "rampura"
    };
    resp.render('profile', { user });
});

app.listen(4000);
