document.querySelector("#btn").addEventListener("click", function() {
  
    document.querySelectorAll(".hide").forEach(function(element) {
        element.style.display = "none";
    });
});