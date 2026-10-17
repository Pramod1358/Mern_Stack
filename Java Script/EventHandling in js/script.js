// Events

//1.Event Handlers

// (onClick , onLoad ,onMouseOver , onMouseout , onKeyPress , onKeydown , onKeyUp)

function onClickfun(){
    console.log("Hi");
}

const keyPressEvent = () =>{
    console.log("The key has been hitted")
}

const keyDownEvent = () =>{
    console.log("Down")
}

const keyUpEvent = () =>{
    console.log("up")
}

//note : diff between event handlers and event listeners 
// in handlers we will write on before every fuction like onclick , onkey press where as in listners no need of on just click,mouseover etc..
// handerls cannot handle same fuction (onclick, onmouseover) mpre than one time but events can handle and excecute them multiple times



// 2 .Event Listeners

const box1 = document.getElementById('box2')

box1.addEventListener('click' , ()=>{
    console.log("Mouse has been Clicked !!")
})

box1.addEventListener('click' ,()=>{
    console.log("Also 2nd time")
},true)