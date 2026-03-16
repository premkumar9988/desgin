
let name = "Prem";
let course = "JavaScript";

let message = `Hello ${name}, welcome to the ${course} course`;
console.log(message);



let books = ["Python","Java","English","Tamil"];
console.log(books);

let techBooks = ["Python","Java"];
let languageBooks = ["English","Tamil"];

let allBooks = [...techBooks,...languageBooks];
console.log("All Books:",allBooks);



function totalPrice(...prices){

let total = 0;

for(let i=0;i<prices.length;i++){
total += prices[i];
}

console.log("Total:",total);

}

totalPrice(800,700,600,500);



function greet(name,callback){

console.log("Hello "+name);

callback();

}

function bye(){
console.log("Thank you for visiting bookstore");
}

greet("Prem",bye);

function buyBook(book){

return new Promise(function(resolve,reject){

let success=true;

if(success){
resolve(`You bought ${book}`);
}else{
reject("Payment Failed");
}

});

}

buyBook("Python")
.then(result=>console.log(result))
.catch(error=>console.log(error));


function orderBook(){

return new Promise(resolve=>{

setTimeout(()=>{
resolve("Order completed");
},2000)

})

}

async function processOrder(){

let result = await orderBook();

console.log(result);

}

processOrder();

function createCart(){

let count=0;

return function(){

count++;

return count;

}

}

let cartCounter = createCart();


let cartItems=[];
let cartCount=document.getElementById("cartCount");

function addToCart(book,price){

cartItems.push({book,price});

let count=cartCounter();

cartCount.innerText=count;

console.log(`${book} added to cart`);

}

