document.querySelector("#btn").addEventListener("click", function() {
    let checkboxes = document.querySelectorAll(".check:checked");

    document.querySelector(".result").innerText =
        "Selected: " + checkboxes.length;
});