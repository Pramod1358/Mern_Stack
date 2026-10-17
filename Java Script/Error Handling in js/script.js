// console.log(age)

// try{
//     console.log(age)
// }
// catch(err){
//     console.log(err)
//     console.log(err.name)
//     console.log(err.message)
// }

try {
    const ans = prompt('Are you a robot ?')
    console.log('Before Error - Try')

    if(ans == 'Y')
    {
        throw new Error('Robots are strictly avoided!')
        // throw "Robot's are not allowed !!"
    }

    // console.log('After Error - Try')
}
catch(err) {
    console.log('Catch Block')

    console.log(err)
}
finally {
    console.log('Finally Block')
}

console.log('Important business logic')