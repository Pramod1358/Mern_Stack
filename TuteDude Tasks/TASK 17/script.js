
let a;
const ans = ((num1 , num2)=>{
    return new Promise((resolve , reject) =>{
        setTimeout(() => {
            if(num2 !=0){
            a=num1/num2;
            resolve(a);
        }
        else{
            reject("The number is not divisible")
        }
        }, 3000);
    })
})


async function divison() {

    try {
        const ans1 = await ans(2, 2);
        console.log(ans1);
    } catch (error) {
        console.log(error);
    }

    try {
        const ans2 = await ans(2, 2);
        console.log(ans2);
    } catch (error) {
        console.log(error);
    }

    try {
        const ans3 = await ans(2, 0);
        console.log(ans3);
    } catch (error) {
        console.log(error);
    }

    try {
        const ans4 = await ans(2, 1);
        console.log(ans4);
    } catch (error) {
        console.log(error);
    }

    try {
        const ans5 = await ans(2, 0);
        console.log(ans5);
    } catch (error) {
        console.log(error);
    }
}

divison();