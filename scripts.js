let cart = 0;

function addToCart(){
cart++;
document.getElementById("cartCount").innerText = cart;
alert("Book added to cart!");

}



let searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keyup", function(){

let filter = searchBar.value.toLowerCase();

let books = document.querySelectorAll(".book");
books.forEach(function(book){

let title = book.querySelector("h3").innerText.toLowerCase();

if(title.includes(filter)){
book.style.display="block";
}
else{
book.style.display="none";
}

});

});