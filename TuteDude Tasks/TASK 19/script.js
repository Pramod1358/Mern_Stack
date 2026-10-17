



let arr = [
    {item : "Dry Cleaning" , price : 1200},
    {item : "Leather and sludge cleaning " , price : 120},
    {item : "ironing" , price : 120},
    {item : "Wedding Dress Cleaning" , price : 1200},
    {item : "Wash and fold" , price : 140},
    {item : "Stain Removal" , price : 1200},

];

let count = 0;
const add = document.getElementById('add-item')

let sNo = 0;

let total = 0;
document.getElementById('img').innerHTML=
    `
        <img src="./images/image-${1}.jpg" alt="dry-cleaning"/>
    `

    document.getElementById('img-details').innerHTML =
    `
        <h3>${arr[count].item}</h3>
        <h3>₹${arr[count].price}</h3>
    `
add.addEventListener('click',(event)=>{
    
    document.getElementById("cart-empty").innerHTML = " ";
    
    event.preventDefault();
    const i = arr[count].item;
    const p = arr[count].price;
    count++;
    sNo++;
    const tc = document.getElementById('table-content');
    total = total+p;
    tc.innerHTML+= `
    <tr>
        <td>${sNo}</td>
        
        <td>${i}</td>
       
        <td>${p}</td>
       
    </tr>
    `
    if(count <= arr.length-1){

    
    
    document.getElementById('total').innerHTML = 
    `
         <p>Total Amount</p>
         <p>₹${total}</p>
    `

    document.getElementById('img').innerHTML=
    `
        <img src="./images/image-${count+1}.jpg" alt="img"/>
    `
   
    document.getElementById('img-details').innerHTML =
    `
        <h3>${arr[count].item}</h3>
        <h3>₹${arr[count].price}</h3>
    `
    }
    
    
})

const skip= document.getElementById('skip-item')

skip.addEventListener('click',(event)=>{
    event.preventDefault();
    const i = arr[count].item;
    const p = arr[count].price;
    count++;

    if(count <= arr.length-1){

    
     document.getElementById('img').innerHTML=
    `
        <img src="./images/image-${count+1}.jpg" alt="dry-cleaning"/>
    `

    document.getElementById('img-details').innerHTML =
    `
        <h3>${arr[count].item}</h3>
        <h3>₹${arr[count].price}</h3>
    `
    }
})

const b = document.getElementById('book')


b.addEventListener('click',(event)=>{
    event.preventDefault();
    const name = document.getElementById("f-name").value;
    const email = document.getElementById("f-email").value;
    const number = document.getElementById("f-number").value;
    const form = document.getElementById('form')
    const para =document.getElementById('para')
    const password = document.getElementById('pass').value;
    if(name.length > 0 && email.length > 0 && number >= 1000000000 && password.length > 0){
        
        if(total > 0){
        para.innerText = "Thankyou for contacting we will get back to you"
        para.style.color="green"
        }
        else{
            para.innerText = "Select items to proceed"
            para.style.color="red"
        }

    }

    
    else{
        para.innerText = "Enter the complete details"
        para.style.color="red"
    }
})