// Selecting Side Navbar,Menu Icon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})


// Product Search Functionality
var productContainer = document.getElementById("product-container");
var search = document.getElementById("search");
var productList = productContainer.querySelectorAll("div");

search.addEventListener("keyup", function (event) {
    var enteredValue = event.target.value.toUpperCase();

    productList.forEach(function (product) {
        var productName = product.querySelector("h1").textContent;

        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            product.style.display = "none";
        } else {
            product.style.display = "block";
        }
    });
});


