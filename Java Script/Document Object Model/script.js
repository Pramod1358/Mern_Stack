// There are three approaches

// getElementById
// const box = document.getElementById('box1')
// box.style.backgroundColor = "green";



//getElementByTagName

// The code fails because document.getElementsByTagName('p') returns a collection of elements, not a single element.
//  You cannot change styles on the collection directly. Also, the correct CSS property in JavaScript is style.color
//  , not fontColor.

// const tagName = document.getElementsByTagName('p');
// tagName.style.fontColor = "green";

//getElementByClassName 

// const name = document.getElementsByClassName('box')

// for (let i = 0; i < name.length; i++) {
//     name[i].style.color = "green";
// }


// Modyfing elements

// const box = document.getElementById('box1')
// box.innerHTML="<solid>Pramod</solid>"   
// box.innerText = "pramod"

// Note : The difference between inner html and inner text is in inner text we can only change the text but in
//  inner html we can also add the styles to that particular selected item

// const box = document.getElementById('box1')
// box.style.backgroundColor = "green";

// const box = document.getElementById("box2")

// box.classList.add('circle')

// const boxs= document.getElementById("box3")
// boxs.classList.remove('circle')


//creating a new element

// 1st get the access 
// 2nd in the contents 
// 3rd is appending 

const newpara = document.createElement('p');
newpara.innerText="Pramod is a good boy";

const cont = document.getElementById('cont')
cont.appendChild(newpara)

newpara.classList.add('box')