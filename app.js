const express = require('express');
const routes = require('./routes/newsRoutes');
const port=3010;
const app = express();


app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));




//static files


app.use('/',routes);
app.use('/article',routes);

app.listen(port,()=>{
    console.log(`Listening on port ${port}...`);
});