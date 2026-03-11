let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

function updateCart(){

let cartItems = document.getElementById("cartItems");
cartItems.innerHTML = "";

total = 0;

cart.forEach((item,index)=>{

let li = document.createElement("li");

li.innerHTML = item.name + " ₹" + item.price +
` <button class="remove" onclick="removeItem(${index})">X</button>`;

cartItems.appendChild(li);

total += item.price;

});

document.getElementById("total").innerText = total;

document.getElementById("cart-count").innerText = cart.length;

localStorage.setItem("cart",JSON.stringify(cart));

}

function addToCart(name,price){

cart.push({name,price});

updateCart();

}

function removeItem(index){

cart.splice(index,1);

updateCart();

}

function searchBooks(){

let input = document.getElementById("search").value.toLowerCase();

let cards = document.querySelectorAll(".card");

cards.forEach(card=>{

let name = card.getAttribute("data-name");

if(name.includes(input)){
card.style.display="block";
}else{
card.style.display="none";
}

});

}

updateCart();