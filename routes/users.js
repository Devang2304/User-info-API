const express =require('express');
const router= express.Router();

// installed uuid package which will create unique ID for
//each user whenever we fetch request for particular user
const {v4 : uuidv4} = require('uuid')

let users =[];

// all routes in here are starting with /users
router.get('/', (req, res) => {
    console.log(users)
    res.send(users);
});

//posting the data to the server using post
router.post('/', (req, res) => {
    console.log('Post route reached');
    const user =req.body;

// '...user' that is '...' operator takes all of the 
//properties of the variable used.
    users.push({...user, id: uuidv4()});
    res.send('Post route reached');
});

//checking if the user with the given id exists
// router.get('/:id', (req, res) => {
    //     console.log(users)
    //     res.send(users.find(user => user.id === req.params.id));
    // });
    
//get particular user with given id
// .users/2 => req.params { id:2 }
router.get('/:id',(req,res)=>{
    const {id} = req.params;
    const founduser=users.find((user)=>user.id ===id);

    res.send(founduser);
});

//deleting the specific user with id
router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    users=users.filter((user)=>user.id!=id);
    res.send(`User with the id ${id} was deleted`);
});

//updating the user information of specific id
router.patch('/:id',(req,res)=>{
    const {id} = req.params;
    const user=users.find((user)=>user.id===id);
    const {firstName,lastName,age}=req.body;
    if(firstName){
        user.firstName=firstName;
    }
    if(lastName){
        user.lastName=lastName;
    }
    if(age){
        user.age=age;
    }
    res.send(`User with the id ${id} was updated`);
});


module.exports = router;
