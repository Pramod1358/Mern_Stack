//Anonymus function : This will be present in the local scope remember and it will be assigned to a variable

// Note : If the anonymus fuction then you should write it top of any fuction calls not like named fuction


let summation = function(a , b){
    return a+b;
}
console.log(summation(1,2))



//named fuctions
// These are called named functions where we can write themin a global scope
function sum(a,b){
    return a+b;
}

console.log(sum(1,4))


//nested function

function addSquare(a , b){
    
    function square(x){
        return x*x;
    }

    return square(a)+square(b);
}

console.log(addSquare(2,3))




