

let arr=[1,2,3,4,5,6]

// map method

// const mapArr = arr.map((num) => num+40);
// console.log(mapArr)

// const mapArr= arr.map(function(num){
//     return num+40;
// })
// console.log(mapArr);

// const mapArr = arr.map( function (num){
//     return num+20;
// })

// console.log(mapArr);


//filter

// const filterArr = arr.filter( (num) => num > 0)

// console.log(filterArr);

// find 

// const findArr = arr.find(function(num){
//     return num > 0;
// })

// console.log(findArr)

// reduce

// const redArr = arr.reduce((accumlator , currentValue)=>{
//     return accumlator + currentValue
// },0)

// console.log(redArr);

const redArr = [
    
        {
            itemName : "Iphone 16",
            price : 100,
            quantity : 1
        },
        {
            itemName : "Water Bottle",
            price : 10,
            quantity : 2
        },
        {  
            itemName : "Laptop Bag",
            price : 30,
            quantity : 4
         }
]

const res = redArr.reduce((Accumlator , currentValue ) =>{
            return Accumlator + currentValue.price*currentValue.quantity;

},0)

console.log(res);