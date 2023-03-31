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


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

var modal = document.getElementById('login-form');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    modal.style.display = "none";
}

// adding and removing the items to cart

const cartItems = [];

// Get elements
const productList = document.getElementById("product-list");
const cartItemsList = document.getElementById("cart-items");
const clearCartBtn = document.getElementById("clear-cart");
const checkOutBtn = document.getElementById("check-out");
// Add event listener to product list
productList.addEventListener("click", addToCart);

// Add event listener to clear cart button
clearCartBtn.addEventListener("click", clearCart);

// Add event listener to checkout
checkOutBtn.addEventListener("click", checkOut);

function addToCart(event) {
    const clickedBtn = event.target;
    if (clickedBtn.classList.contains("add-to-cart")) {
        const productId = clickedBtn.getAttribute("data-id");
        const product = getProductById(productId);
        if (product) {
            const cartItem = {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
            };
            const existingCartItem = cartItems.find(item => item.id === cartItem.id);
            if (existingCartItem) {
                existingCartItem.quantity++;
            } else {
                cartItems.push(cartItem);
            }
            renderCartItems();
            calculateTotalPrice();
        }
    }
}

function getProductById(id) {
    // Database required
    // Sample hard coded data
    const products = [
        { id: "product-1", name: "Apple", price: 10 },
        { id: "product-2", name: "Product 2", price: 15 },
        { id: "product-3", name: "Product 3", price: 20 },
        { id: "product-3.1", name: "Orange Juice", price: 50 },
        { id: "product-3.2", name: "Mango Juice", price: 50 },
        { id: "product-3.3", name: "Pineapple juice", price: 80 },
        { id: "product-3.4", name: "Passion fruit juice", price: 55 },
        { id: "product-3.5", name: "Avocado juice", price: 50 },
        { id: "product-2.1", name: "Apples", price: 45 },
        { id: "product-2.2", name: "Oranges", price: 20 },
        { id: "product-2.3", name: "Bnanas", price: 20 },
        { id: "product-2.4", name: "Blue grapes", price: 15 },
        { id: "product-2.5", name: "Watermelon", price: 200 },
        { id: "product-2.6", name: "Avocadoes", price: 20 },
        { id: "product-2.7", name: "Lemons", price: 20 },
        { id: "product-2.8", name: "Strawberries", price: 100 },
        { id: "product-2.9", name: "Mangoes", price: 30 },
        { id: "product-2.10", name: "Passion fruits", price: 100 }
    ];
    return products.find(product => product.id === id);
}

function renderCartItems() {
    cartItemsList.innerHTML = "";
    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
      <span>${item.name}</span>
      <span>${item.quantity} x $${item.price}</span>
      <button class="remove-from-cart" data-id="${item.id}">Remove</button>
    `;
        cartItemsList.appendChild(li);
    });
    if (cartItems.length === 0) {
        const li = document.createElement("li");
        li.innerText = "Your cart is empty";
        cartItemsList.appendChild(li);
    }
}

function clearCart() {
    cartItems.length = 0;
    renderCartItems();
    calculateTotalPrice();
}


function removeCartItem(event) {
    const clickedBtn = event.target;
    if (clickedBtn.classList.contains("remove-from-cart")) {
        const productId = clickedBtn.getAttribute("data-id");
        const existingCartItem = cartItems.find(item => item.id === productId);
        if (existingCartItem) {
            existingCartItem.quantity--;
            if (existingCartItem.quantity <= 0) {
                cartItems.splice(cartItems.indexOf(existingCartItem), 1);
            }
            renderCartItems();
            calculateTotalPrice();
        }
    }
}

function calculateTotalPrice() {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const li = document.createElement("li");
    li.innerText = `Total Price: $${totalPrice}`;
    cartItemsList.appendChild(li);
}

// Add event listener to cart items list for removing items
cartItemsList.addEventListener("click", removeCartItem);

function checkOut() {
    window.alert("Do you want to check out")
}