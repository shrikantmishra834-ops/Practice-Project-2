let btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
    let elements = document.querySelectorAll(".active");

    elements.forEach(function(element) {
        element.classList.remove("active");
    });
});