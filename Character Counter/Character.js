document.querySelector(".message").addEventListener("input", function() {
    let length = this.value.length;

    document.querySelector(".count").innerText =
        "Characters: " + length;
});