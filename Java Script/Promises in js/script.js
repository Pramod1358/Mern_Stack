// const ticket = new Promise(function(resolve , reject){
//     const isBoarded = true;
//     if(isBoarded){
//         resolve("You are eligible to onboard");
//     }
//     else{
//         reject("You are not eligibe to onboard");
//     }
// })

// ticket.then((data) =>{
//     console.log("wohoo ",data);
// }).catch((data) =>{
//     console.log("oh no ",data)
// })


function getCandies(){
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
        const candies = "🍫"
        // console.log("In our candies function "+ candies);
        resolve(candies)
        },3000)
    })
}

function getKeys(candies){
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
        const keys =candies+ "🔑"
        // console.log("In our keys function "+ keys);
        resolve(keys)
        },3000)
    })
}

function gethome(keys){
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
        const house = keys+"🏠"
        // console.log("In our home function "+ house);
        resolve(house)
        },3000)
    })
}


// getCandies()
//     .then((candies) => {
//         console.log("Here is your candy:", candies);
//         return getKeys(candies);
//     })
//     .then((keys) => {
//         console.log("Here are your keys:", keys);
//         return gethome(keys);
//     })
//     .then((house) => {
//         console.log("Here is your home:", house);
//     }).catch((err)=>{
//         console.log(err)
//     }).finally(()=>{
//         console.log("Happy to assist you")
//     })


async function onboardClient() {
    try {
        const candy = await getCandies();
        console.log("Here are your ", candy);
        
        const key = await getKeys(candy);
        console.log("Here are yoyr keys"+ key);

        const onboard = await gethome(key);
        console.log("here is your home"+ onboard)
    } catch (error) {
        confirm.log(error)
    }
    console.log("Happy to assist you");
    

    
}

onboardClient()