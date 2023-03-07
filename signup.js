var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var submitButton = document.getElementById("submit");

var signupemail = document.getElementById("email_signUp");
var confirmSignupEmail = document.getElementById("confirm_email_signUp");
var signupPassword = document.getElementById("password1");
var confirmSignupPassword = document.getElementById("password2");
var registerButton = document.getElementById("Register_btn");

var main = document.getElementById("main");
var createAccount = document.getElementById("create-account");

var signupButton = document.getElementById("signUp_btn");
var returnButton = document.getElementById("return_btn");
signupButton.addEventListener("click", function() {
    main.style.display = "none";
    createAccount.style.display = "block";
})
returnButton.addEventListener("click", function() {
    main.style.display = "block";
    createAccount.style.display = "none";
})