let tabs = document.querySelectorAll(".tab");

tabs.forEach(function(tab) {

    tab.addEventListener("click", function() {

        tabs.forEach(function(item) {
          
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});