const express =require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT= 5000;

//initialize the middleware
app.use(bodyParser.json());

// we dont want to restart the server when making changes so to avoid restarting the server time to
//time we install nodemon package
app.listen(PORT,()=>{
    console.log(`listening on port http://localhost:${PORT}`); 
})
