let links = document.querySelectorAll(".nav");

links.forEach(function(link) {
  
    link.addEventListener("click", function(event) {
        event.preventDefault();

        links.forEach(function(item) {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});