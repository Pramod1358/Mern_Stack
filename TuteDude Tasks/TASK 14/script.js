let num=12;


// Sum of first N numbers
let SumOfFirstN=0;

for(let i=0;i<=num;i++){
    SumOfFirstN+=i;
}

console.log("Sum of first N Numbers :"+SumOfFirstN);

// printing N numbers
console.log("Printing the n numbers")
for(let i=0;i<=num;i++){
    console.log(i+" ");
}

// prime Number check
let flag=true;
for(let i=2;i<=num/2;i++){
    if(num % i == 0){
        console.log(num+" is not a prime Number")
        flag=false;
        break;
    }
}

if(flag == true){
    console.log(num+" is  a prime Number")
}

// print Factors 
console.log("The factors of "+num+" are : ");

for(let i=2;i<num;i++){
    if(num % i == 0){
        console.log(i);
    }
}

//sum of the digits

let dup = num;
let store=0;
let s=0;

while(dup>0){
    store = dup % 10;
    s +=store;
    dup=Math.floor(dup/10);
}

console.log("Sum of the digits for number "+num+ " : "+s);


// armstrong number

let dup2 = num;
store = 0;
s=0;

while(dup2>0){
    store = dup2 % 10;
    s+=store**3;
    dup2 = Math.floor(dup2/10);
}

if(s == num){
    console.log("The number "+ num +" is a Armstrong");
}
else{
    console.log("The number " +num+" is not an Armstrong")
}



