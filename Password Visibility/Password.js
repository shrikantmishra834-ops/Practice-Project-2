document.querySelector("#show").addEventListener("change", function() {
    
  let password = document.querySelector(".password");


    password.type = this.checked ? "text" : "password";
});