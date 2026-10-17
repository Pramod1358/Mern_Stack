const express = require('express')
const {users} = require("../data/users.json");
const { getAllUsers, getSingleUserById, createUser, updateUserById, deleteUserById, getSubscriptionDetailsById } = require('../controllers/user-controller');


const router = express.Router();

// router.get('/',(req , res)=>{
//     res.status(200).json({
//         success : true,
//         data : users
//     })
// })

router.get('/',getAllUsers)

// router.get('/:id' , (req ,res) =>{

//     const {id} = req.params;
//     const user = users.find((each)=> each.id === id);

//     if(!user){
//         return res.status(404).json({
//             success : false,
//             message : `data not found ${id}`
//         })
//     }

//     res.status(200).json({
//         success : true,
//         data : user
//     })

// })

router.get('/:id',getSingleUserById)


// router.post('/',(req , res) =>{
//     //  "id": "4",
//     //     "name": "Jane",
//     //     "surname": "Doe",
//     //     "email": "user@email.com",
//     //     "subscriptionType": "Premium",
//     //     "subscriptionDate": "01/01/2022"
//     const { id , name , surname , email , subscriptionType ,subscriptionDate } = req.body;

//     if(!id || !name || !surname || !email || !subscriptionType || !subscriptionDate){
//         return res.status(400).json({
//             success : false,
//             message :"Please provide all the required fields"
//         })
//     }

//     const user = users.find((each)=> each.id=== id);

//     if(user){
//         return res.status(409).json({
//             success : false,
//             message : `user already exists with the id ${id}`
//         })
//     }

//     users.push({
//          id , name , surname , email , subscriptionType ,subscriptionDate
//     })

//     res.status(201).json({
//         success :true,
//         message : "User added successfully"
//     })
// })

router.post('/',createUser)

// router.put('/:id' , (req , res) =>{
//     const {id} = req.params;
//     const {data} = req.body;
//     const user = users.find((each)=> each.id=== id);

//     if(!user){
//         res.status(404).json({
//             success : false,
//             message : "user not found"
//         })
//     }

//     const updateUser = users.map((each) =>{
//         if(each.id === id){
//             return{
//                 ...each,
//                 ...data,
            
//             }  
            
//         }
//         return each
//     })

//     res.status(200).json({
//         success: true,
//         data : updateUser,
//         message: "user updated successully"
//     })
// })

router.put(':id',updateUserById)

// router.delete('/:id',(req , res) =>{
//     const {id} = req.params;

//     const user =users.find((each) => each.id === id);

//     if(!user){
//        return res.status(404).json({
//             success : false,
//             message : "User not found"
//         })
//     }

//     const updatedUser = users.filter((each) =>each.id != id)

//     res.status(200).json({
//         success :true,
//         data : updatedUser,
//         message : "Successfully deleted the user"
//     })

// })

router.delete('/:id',deleteUserById)


// router.get('/subscription-details/:id', (req, res) => {
//     const { id } = req.params;

//     // Find the user by ID
//     const user = users.find((each) => each.id === id);
//     if (!user) {
//         return res.status(404).json({
//             success: false,
//             message: `User Not Found for id: ${id}`
//         });
//     }

//     // Extract the subscription details
//     const getDateInDays = (data = '') =>{
//         let date;
//         if(data){
//             date = new Date(data);
//         }else{
//             date = new Date();
//         }
//         let days = Math.floor( date/ (1000 * 60 * 60 * 24));
//         return days;
//     }

//     const subscriptionType = (date) => {
//         if(user.subscriptionType === "Basic"){
//             date = date + 90
//         }else if(user.subscriptionType === "Standard"){
//             date = date + 180
//     }else if(user.subscriptionType === "Premium"){
//             date = date + 365
//         }
//         return date;
//     }

//     // Subscription Expiration Calculation 
//     // January 1, 1970 UTC // milliseconds

//     let returnDate = getDateInDays(user.returnDate);
//     let currentDate = getDateInDays();
//     let subscriptionDate = getDateInDays(user.subscriptionDate);
//     let subscriptionExpiration = subscriptionType(subscriptionDate);

//     const data = {
//         ...user,
//         subscriptionExpired: subscriptionExpiration < currentDate,
//         subscriptionDaysLeft: subscriptionExpiration - currentDate,
//         daysLeftForExpiration: returnDate - currentDate,
//         returnDate: returnDate < currentDate ? "Book is overdue" : returnDate,
//         fine: returnDate < currentDate ? subscriptionExpiration <= currentDate ? 200 : 100 : 0
//     }

//     res.status(200).json({
//         success: true,
//         data
//     });
// });

router.get('/subscription-details/:id',getSubscriptionDetailsById)

module.exports= router;