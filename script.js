// NAVBAR COLLAPSE
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > lastScrollY) {
        // User is scrolling down
        navbar.classList.add('hidden');
    } else {
        // User is scrolling up
        navbar.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
});

var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
var navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarCollapse.classList.remove('show');
    });
});

// FOLLOW-US ICON ANIMATION
const icons = document.querySelectorAll('.follow-us-icon-container');
icons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.2)'; // Increase size on hover
        icon.style.transition = 'transform 0.3s ease'; // Add a smooth transition
    });

    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)'; // Reset size when not hovering
    });
});

// ANIMATION FOR BUTTONS
const buttons = document.querySelectorAll('.custom-button, .custom-outline-button'); // Select all button types

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.3s ease';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});



// TRANSPARENT SCROLL
document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

function toggleCart() {
    var mainPage = document.getElementById("mainPage");
    var cartPage = document.getElementById("cartPage");

    if (mainPage.style.display === "none") {
        mainPage.style.display = "block";
        cartPage.style.display = "none";
    } else {
        mainPage.style.display = "none";
        cartPage.style.display = "block";
    }
}

function addItemToCart(itemName, price) {
    const cartTableBody = document.querySelector('.table tbody');
    let existingRow = null;
    const existingRows = cartTableBody.querySelectorAll('tr');
    existingRows.forEach(row => {
        const existingItemName = row.querySelector('td:first-child').textContent;
        if (existingItemName === itemName) {
            existingRow = row;
        }
    });

    if (existingRow) {
        const quantityElement = existingRow.querySelector('span');
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        const totalElement = existingRow.querySelector('td:last-child');
        const priceElement = existingRow.querySelector('td:nth-child(3)');
        const price = parseFloat(priceElement.textContent.replace('₹', ''));
        const total = quantity * price;
        totalElement.textContent = '₹' + total;
    } else {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
               <td>${itemName}</td>
               <td>
                 <button class="btn btn-sm btn-secondary" onclick="updateQuantity(this, -1)">-</button>
                 <span>1</span>
                 <button class="btn btn-sm btn-secondary" onclick="updateQuantity(this, 1)">+</button>
               </td>
               <td>₹${price}</td>
               <td>₹${price}</td>
             `;
        cartTableBody.appendChild(newRow);
    }
    updateCart();
}

function updateQuantity(button, change) {
    const quantityElement = button.parentElement.querySelector('span');
    let quantity = parseInt(quantityElement.textContent);
    quantity += change;
    if (quantity < 0) {
        quantity = 0;
    }
    quantityElement.textContent = quantity;
    if (quantity === 0) {
        const row = button.parentElement.parentElement;
        row.remove();
    }
    updateCart();
}

function addItemToCart(itemName, price) {
    const cartTableBody = document.querySelector('.table tbody');
    let existingRow = null;
    const existingRows = cartTableBody.querySelectorAll('tr');
    existingRows.forEach(row => {
        const existingItemName = row.querySelector('td:first-child').textContent;
        if (existingItemName === itemName) {
            existingRow = row;
        }
    });

    if (existingRow) {
        const quantityElement = existingRow.querySelector('span');
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        const totalElement = existingRow.querySelector('td:last-child');
        const priceElement = existingRow.querySelector('td:nth-child(3)');
        const price = parseFloat(priceElement.textContent.replace('₹', ''));
        const total = quantity * price;
        totalElement.textContent = '₹' + total;
    } else {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
          <td>${itemName}</td>
          <td>
            <button class="btn btn-sm btn-secondary" onclick="updateQuantity(this, -1)">-</button>
            <span>1</span>
            <button class="btn btn-sm btn-secondary" onclick="updateQuantity(this, 1)">+</button>
          </td>
          <td>₹${price}</td>
          <td>₹${price}</td>
        `;
        cartTableBody.appendChild(newRow);
    }
    updateCart();
}

function updateQuantity(button, change) {
    const quantityElement = button.parentElement.querySelector('span');
    let quantity = parseInt(quantityElement.textContent);
    quantity += change;
    if (quantity < 0) {
        quantity = 0;
    }
    quantityElement.textContent = quantity;
    if (quantity === 0) {
        const row = button.parentElement.parentElement;
        row.remove();
    }
    updateCart();
}

function updateCart() {
    let subtotal = 0;
    const quantityElements = document.querySelectorAll('.table tbody span');
    const priceElements = document.querySelectorAll('.table tbody td:nth-child(3)');
    const totalElements = document.querySelectorAll('.table tbody td:last-child');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');

    for (let i = 0; i < quantityElements.length; i++) {
        const quantity = parseInt(quantityElements[i].textContent);
        const price = parseFloat(priceElements[i].textContent.replace('₹', ''));
        const total = quantity * price;
        totalElements[i].textContent = '₹' + total;
        subtotal += total;
    }

    subtotalElement.textContent = '₹' + subtotal;
    const deliveryCharges = parseFloat(document.getElementById('deliveryCharges').textContent.replace('₹', ''));
    totalElement.textContent = '₹' + (subtotal + deliveryCharges);

    // Update cart item count in the icon
    const cartItemCountElement = document.getElementById('cartItemCount');
    cartItemCountElement.textContent = quantityElements.length;
}

// Attach event listeners to "Add item" buttons on the menu pages
const addItemButtons = document.querySelectorAll('.menu-item-card .custom-button');
addItemButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.menu-item-card');
        const itemName = card.querySelector('.menu-card-title').textContent;
        const price = parseFloat(card.querySelectorAll('.menu-item-desc')[1].textContent.replace('₹', ''));
        addItemToCart(itemName, price);
    });
});

// Initial cart update
updateCart();