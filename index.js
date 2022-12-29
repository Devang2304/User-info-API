const express =require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');

const app = express();
const PORT= 5000;

//initialize the middleware
app.use(bodyParser.json());
app.use('/users',usersRoutes);

// creating routes 
app.get('/',(req,res)=>{
    res.send('Hello from home page!');
}); 

// we dont want to restart the server when making changes so to avoid restarting the server time to
//time we install nodemon package
app.listen(PORT,()=>{
    console.log(`listening on port http://localhost:${PORT}`); 
})
