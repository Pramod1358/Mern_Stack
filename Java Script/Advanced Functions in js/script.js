// Named Function


function greet(){
    console.log("Greet 1");
}

greet()


// Anonymous Function

let greet2 = function(){
    console.log("Greet 2")
}

greet2()


// Arrow Function

let greet3 = (num1,num2) => num1*num2;

console.log(greet3(12,2));


let greet4 = () => {
    console.log("Greet 4")
}

greet4()

//Call Back Fuction
const calculate = (a,b , operation)=>{
    return operation(a,b)
}


const sum  = calculate(2,3,function(n1, n2) {
    return n1+n2;
})



console.log(sum)


//named fun

function sub(a,b){
    return a-b;
}

console.log(calculate(3,2,sub));

// Arrow function

const mul = (a,b) => a*b;

console.log(calculate(5,6,mul))

const arr = [1,2,3,4,-1,-3]

//method 1

// const fi = (num) => num < 0

// Yes, there is a built-in method to find the index of a given value. 👍

// You're thinking of indexOf(), not findIndex().

// 2. findIndex() — find index based on a condition

// findIndex() is different because it takes a callback:
const fi = (num) =>{
    return num < 0
}


const result = arr.find(fi)
console.log(result)

const res=arr.findIndex(fi)
console.log(res)

console.log(arr.indexOf(1))


arr.forEach((num , inder) =>{
    console.log(num +" "+ inder)
})