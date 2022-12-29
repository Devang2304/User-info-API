const express =require('express');

const router= express.Router();

const users =[
    {
        firstName:"John",
        lastName:"Doe",
        age:25
    },
    {
        firstName:"Jane",
        lastName:"Doe",
        age:24
    }
]

// all routes in here are starting with /users
router.get('/', (req, res) => {
    console.log(users)
    res.send(users);
});

//posting the data to the server using post
router.post('/', (req, res) => {
    
});

module.exports = router;
