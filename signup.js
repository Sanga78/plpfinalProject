import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyD148VTZVikTNoaoQQ4fZot4BMeC7Eay6Y",
    authDomain: "sunfresh-4f91b.firebaseapp.com",
    projectId: "sunfresh-4f91b",
    storageBucket: "sunfresh-4f91b.appspot.com",
    messagingSenderId: "699929112386",
    appId: "1:699929112386:web:0fc136c1d06fb99363e2db",
    measurementId: "G-CGL18EGFQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

var emaillog = document.getElementById("email");
var passwordlog = document.getElementById("password");
var submitButton = document.getElementById("submit");

var signupEmailIn = document.getElementById("email_signUp");
var confirmSignupEmailIn = document.getElementById("confirm_email_signUp");
var signupPasswordIn = document.getElementById("password1");
var confirmSignupPasswordIn = document.getElementById("password2");
var registerButton = document.getElementById("Register_btn");

var main = document.getElementById("main");
var createAccount = document.getElementById("create-account");

var signupButton = document.getElementById("signUp_btn");
var returnButton = document.getElementById("return_btn");

var email,
    password,
    signupEmail,
    confirmSignupEmail,
    signupPassword,
    confirmSignupPassword;

registerButton.addEventListener("click", function() {
    console.log("hello");
    var isVarified = true;

    signupEmail = signupEmailIn.value;
    confirmSignupEmail = confirmSignupEmailIn.value;

    if (signupEmail != confirmSignupEmail) {
        window.alert("Email does not match");
        isVarified = false;
    }
    signupPassword = signupPasswordIn.value;
    confirmSignupPassword = confirmSignupPasswordIn.value;

    if (signupPassword != confirmSignupPassword) {
        window.alert("Passwordsdoes not match");
        isVarified = false;
    }

    if (signupEmail == null ||
        confirmSignupEmail == null ||
        signupPassword == null ||
        confirmSignupPassword == null) {
        window.alert("Please fill all the required fields");
    }

    if (isVarified) {
        createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
            .then((userCredentials) => {
                window.alert("Acount Created Successfully");
                window.location = "./Home.html";
            })
            .catch((error) => {
                window.alert("Error!! Please Try Again");
            });
    }
});

submitButton.addEventListener("click", function() {
    email = emaillog.value;
    password = passwordlog.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            window.alert("Login successfull!");
            window.location = "./Home.html";
        })
        .catch((error) => {
            window.alert("The Account doesn't exists!");
        });
});

signupButton.addEventListener("click", function() {
    main.style.display = "none";
    createAccount.style.display = "block";
})
returnButton.addEventListener("click", function() {
    main.style.display = "block";
    createAccount.style.display = "none";
})