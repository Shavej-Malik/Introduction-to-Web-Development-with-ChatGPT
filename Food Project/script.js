// Food items
const foods = [
    {
        id: 1,
        name: "Margherita Pizza",
        price: 299
    },
    {
        id: 2,
        name: "Cheese Burger",
        price: 199
    },
    {
        id: 3,
        name: "Chicken Biryani",
        price: 249
    },
    {
        id: 4,
        name: "Chocolate Cake",
        price: 149
    }
];


// Cart
let cart = [];


// HTML elements
const addButtons = document.querySelectorAll(".add-to-cart");
const cartItems = document.querySelector("#cart-items");
const cartTotal = document.querySelector("#cart-total");
const clearCart = document.querySelector("#clear-cart");


// Add food to cart
addButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const article = button.closest("article");
        const id = Number(article.dataset.id);

        const food = foods.find(function(item) {
            return item.id === id;
        });

        const existingItem = cart.find(function(item) {
            return item.id === id;
        });


        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({
                ...food,
                quantity: 1
            });
        }

        displayCart();
    });
});


// Display cart
function displayCart() {

    cartItems.innerHTML = "";

    let total = 0;


    cart.forEach(function(item) {

        total += item.price * item.quantity;

        const cartItem = document.createElement("div");

        cartItem.innerHTML = `
            <h3>${item.name}</h3>

            <p>
                ₹${item.price} × ${item.quantity}
            </p>

            <button onclick="decreaseQuantity(${item.id})">−</button>

            <span>${item.quantity}</span>

            <button onclick="increaseQuantity(${item.id})">+</button>

            <button onclick="removeItem(${item.id})">
                Remove
            </button>
        `;

        cartItems.appendChild(cartItem);
    });


    cartTotal.textContent = total;
}


// Increase quantity
function increaseQuantity(id) {

    const item = cart.find(function(item) {
        return item.id === id;
    });

    if (item) {
        item.quantity++;
    }

    displayCart();
}


// Decrease quantity
function decreaseQuantity(id) {

    const item = cart.find(function(item) {
        return item.id === id;
    });

    if (item) {

        item.quantity--;

        if (item.quantity === 0) {
            cart = cart.filter(function(item) {
                return item.id !== id;
            });
        }
    }

    displayCart();
}


// Remove item completely
function removeItem(id) {

    cart = cart.filter(function(item) {
        return item.id !== id;
    });

    displayCart();
}


// Clear entire cart
clearCart.addEventListener("click", function() {

    cart = [];

    displayCart();
});