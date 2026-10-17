



const redColor = document.getElementById('Red')

redColor.addEventListener('click', ()=>{
    redColor.style.backgroundColor="red";
})

const blueColor = document.getElementById('Blue')

blueColor.addEventListener('click', ()=>{
    blueColor.style.backgroundColor="blue";
})

const greenColor = document.getElementById('Green')

greenColor.addEventListener('click', ()=>{
    greenColor.style.backgroundColor="green";
})

const yellowColor = document.getElementById('Yellow')

yellowColor.addEventListener('click', ()=>{
    yellowColor.style.backgroundColor="yellow";
})

let bt = document.getElementById('s')
let input = document.getElementById('nameInput')


bt.addEventListener('click' , (event)=>{
    event.preventDefault();
    let name = input.value;
    document.getElementById('topElement').innerText = "Hello "+name;
    

})


