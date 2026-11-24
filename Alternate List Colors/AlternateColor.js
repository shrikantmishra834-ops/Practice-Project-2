let items = document.querySelectorAll(".item");

items.forEach(function(item, index) {
    if (index % 2 === 0) {
        item.style.backgroundColor = "lightblue";
    } else {
        item.style.backgroundColor = "lightyellow";
    }
});