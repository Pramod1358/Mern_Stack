
function getCandies(callback1) {
    setTimeout(() => {
        const candies = "🍫"
        console.log("In our candies function "+ candies);
        callback1(candies)
    }, 3000);
}

function getKey(candies,callback2){
    setTimeout(() => {
        const keys =candies+"🔑"
        console.log("In your get keys method "+keys);
        callback2(keys)
    }, 3000);
}

function onBoard(keys , callback3){
    setTimeout(() => {
        const room = "🏠";
        console.log("Handovering the room"+room)
        callback3(room)
    }, 3000);
}
getCandies((candies) =>{
    // console.log("Here are your "+candies);
    getKey(candies,(keys)=>{
        console.log("These are you keys and candies"+keys)

        onBoard(keys,room =>{
            console.log("Handoverd room and candies , keys",keys,room)
        })
    })

    

})
