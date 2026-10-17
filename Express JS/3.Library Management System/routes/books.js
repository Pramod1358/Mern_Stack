const express = require('express');
const {books} = require('../data/books.json')
const {users} = require('../data/users.json');
const { getAllBooks, getSingleBookById, addNewBook, updateBookById, deleteBookById } = require('../controllers/book-controller');
const router = express.Router();

// router.get('/',(req ,res) =>{
//     res.status(200).json({
//         success : true,
//         data : books
//     })
// })

router.get('/',getAllBooks)

// router.get('/:id' , (req ,res) =>{

//     const {id} = req.params;
//     const book = books.find((each)=> each.id === id);

//     if(!book){
//         return res.status(404).json({
//             success : false,
//             message : `data not found ${id}`
//         })
//     }

//     res.status(200).json({
//         success : true,
//         data : book
//     })

// })

router.get('/:id',getSingleBookById)


// router.post('/',(req , res) =>{
//     const { id , name , author , genre , price ,  publisher} = req.body;

//     if(!id || !name || !author || !genre || !price || !publisher){
//         return res.status(400).json({
//             success : false,
//             message :"Please provide all the required fields"
//         })
//     }

//     const book = books.find((each)=> each.id=== id);

//     if(book){
//         return res.status(409).json({
//             success : false,
//             message : `book already exists with the id ${id}`
//         })
//     }

//     books.push({ id , name , author , genre , price , publisher });

//     res.status(201).json({
//         success : true,
//         message : "Book added successfully",
//         data : books
//     })
// })

router.post('/',addNewBook)

// router.put('/:id' , (req , res) =>{
//     const {id} = req.params;
//     const {data} = req.body;

//     if(!data){
//         return res.status(400).json({
//             success : false,
//             message :"Please provide all the required fields"
//         })
//     }

//     const book = books.find((each)=> each.id === id);

//     if(!book){
//         return res.status(404).json({
//             success : false,
//             message : `data not found ${id}`
//         })
//     }

//     Object.assign(book , data);
    
//     res.status(200).json({

//         success : true,
//         message : "Book updated successfully",
//         data : book
//     })
// })

router.put('/',updateBookById)

// router.delete('/:id',(req , res) =>{

//     const {id} = req.params;

//     const bookIndex = books.findIndex((each)=> each.id === id);

//     if(bookIndex === -1){
//         return res.status(404).json({
//             success : false,
//             message : `data not found ${id}`
//         })
//     }

//     books.splice(bookIndex , 1);

//     res.status(200).json({
//         success : true,
//         message : "Book deleted successfully"
//     })
// })

router.delete('/:id',deleteBookById)

router.get('/issued/for-users' , (req,res) =>{
    const usersWithIssuedBooks =users.filter((each)=>{
        if(each.issuedBook){
            return each;
        }
    })

    const issuedBooks = []

    usersWithIssuedBooks.forEach((each) =>{
        const book =books.find((book) => book.id === each.issuedBook);

        book.issuedDate= each.issuedDate;
        book.returnDate = each.returnDate;

        issuedBooks.push(book)
    })

    if(!issuedBooks){
        return res.status(404).json({
            success: false,
            message:"No Books issued yet"
        })
    }

    res.status(200).json({
        success:true,
        data:issuedBooks
    });
})


module.exports = router;