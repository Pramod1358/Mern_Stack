let cart = []
let total = 0;

let addButton = document.querySelectorAll(".add-btn");

addButton.forEach(function(button){
    button.addEventListener('click',()=>{
         const serviceName = button.dataset.name;
         const price = Number(button.dataset.price);

         const isExisting = cart.find((item)=>{
             return item.name === serviceName;
         })

        if(isExisting){
            cart = cart.filter(function (item) {
                return item.name !== serviceName;
            });
            total = total-price;
            button.textContent = "Add to Cart";
            button.classList.remove("remove-btn");
        }    

         else {
            cart.push({
                name: serviceName,
                price: price
            });
            total = total + price;
            button.textContent = "Remove from Cart";
            button.classList.add("remove-btn");
        }
         displayCart();
    })
})

function displayCart() {

    const cartItems = document.getElementById("cartItems");

    const totalPrice = document.getElementById("totalPrice");
    cartItems.innerHTML = "";

    cart.forEach(function (item) {

        const li = document.createElement("li");
        li.textContent = item.name + " - ₹" + item.price;
        cartItems.appendChild(li);

    });

    totalPrice.textContent = total;

}