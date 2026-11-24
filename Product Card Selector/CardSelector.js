let btn = document.querySelector("#btn");


btn.addEventListener("click", function() {

    let products = document.querySelectorAll(".product");

    products.forEach(function(product) {

        let discount = document.createElement("p");
        
        discount.innerText = "20% OFF";
        product.append(discount);
    });
});