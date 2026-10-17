

let arr =[1 , 2 , 4 , 5 , 3 , 10 , 99 , 12];

function maxNumber(){
    let max = arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i] > max){
            max=arr[i];
        }
    }
    console.log("The maximum number in this array is :"+max)
}

maxNumber();

function sumOfAll() {
    let sum= 0;
    for(var i=0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    console.log("The sum of all numbers in he array :"+sum);
}
sumOfAll()


function noOfOddNum() {
    let count=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2 !== 0){
            count++;
        }
    }
    console.log("The total number of odd numbers :"+count);
}

noOfOddNum();
