const password = document.querySelector(".password input");
const confirmPassword = document.querySelector(".confirm-password input");
const passwordMismatchMsg = document.querySelector(".password p");

confirmPassword.addEventListener("change", (e) => {
    console.log(confirmPassword.value);
    if(confirmPassword.value !== password.value){
        console.log("dispatched");
        password.setCustomValidity("Password Mismatch.");
        confirmPassword.setCustomValidity("Password Mismatch.")
        passwordMismatchMsg.textContent = "* Passwords do not match";
    }
    else {
        password.setCustomValidity("");
        confirmPassword.setCustomValidity("")
        passwordMismatchMsg.textContent = "";
    }
});

password.addEventListener("change", (e) => {
    console.log(password.value);
    if(confirmPassword.value !== password.value){
        console.log("dispatched");
        password.setCustomValidity("Password Mismatch.");
        confirmPassword.setCustomValidity("Password Mismatch.")
        passwordMismatchMsg.textContent = "* Passwords do not match";
    }
    else {
        password.setCustomValidity("");
        confirmPassword.setCustomValidity("")
        passwordMismatchMsg.textContent = "";
    }
});