document.querySelector("#btn").addEventListener("click", function() {
    let images = document.querySelectorAll(".photo");

    images.forEach(function(image) {
        image.style.border = "4px solid blue";
    });
});