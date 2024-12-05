let cart = {}; // Objek untuk menyimpan item dalam keranjang

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("snack-section").style.display = "block";
        document.getElementById("admin-message").style.display = "block";
    } else if (username === "user" && password === "user123") {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("snack-section").style.display = "block";
    } else {
        document.getElementById("error-message").textContent = "Username atau Password salah!";
    }
}

document.getElementById('logout-btn').addEventListener('click', function() {
    if (confirm('Apakah Anda yakin ingin logout?')) {
        location.reload();
    }
});

function addToCart(price, snackName) {
    if (!cart[snackName]) {
        cart[snackName] = { price, quantity: 1 };
    } else {
        cart[snackName].quantity++;
    }
    updateCart();
}

function removeFromCart(snackName) {
    if (cart[snackName]) {
        cart[snackName].quantity--;
        if (cart[snackName].quantity <= 0) {
            delete cart[snackName];
        }
    }
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-list");
    const totalItemsElem = document.getElementById("total-items");
    const totalPriceElem = document.getElementById("total-price");

    cartList.innerHTML = "";
    let totalItems = 0;
    let totalPrice = 0;

    for (const snackName in cart) {
        const { price, quantity } = cart[snackName];
        const itemTotal = quantity * price;
        totalItems += quantity;
        totalPrice += itemTotal;

        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
            ${quantity}x ${snackName} - Rp${itemTotal.toLocaleString('id-ID')}
            <button onclick="addToCart(${price}, '${snackName}')">+</button>
            <button onclick="removeFromCart('${snackName}')">-</button>
        `;
        cartList.appendChild(cartItem);
    }

    totalItemsElem.textContent = totalItems;
    totalPriceElem.textContent = totalPrice.toLocaleString('id-ID');
}

document.getElementById('pay-btn').addEventListener('click', function () {
    const inputMoney = parseInt(document.getElementById('input-money').value);
    const totalPrice = Object.values(cart).reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (isNaN(inputMoney) || inputMoney <= 0) {
        alert('Masukkan jumlah uang yang valid!');
        return;
    }

    if (inputMoney < totalPrice) {
        alert('Uang yang diberikan tidak cukup!');
    } else {
        const change = inputMoney - totalPrice;
        document.getElementById('change-result').textContent = 
            change > 0 
            ? `Kembalian: Rp${change.toLocaleString('id-ID')}`
            : 'Uang pas.';
        cart = {};
        updateCart();
    }
});

document.getElementById('logout-btn').addEventListener('click', function() {
    const confirmation = confirm('Apakah Anda yakin ingin logout?');
    if (confirmation) {
        localStorage.clear();
        sessionStorage.clear();

        window.location.href = 'index.html';
    }
});

// Fungsi untuk mengurangi item dari keranjang
function removeFromCart(snackName) {
    if (cart[snackName]) {
        cart[snackName].quantity--;
        if (cart[snackName].quantity <= 0) {
            delete cart[snackName];
        }
    }
    updateCart();
}

// Fungsi untuk menghapus item sepenuhnya dari keranjang
function deleteFromCart(snackName) {
    if (cart[snackName]) {
        delete cart[snackName];
    }
    updateCart();
}

// Fungsi untuk memperbarui tampilan keranjang
function updateCart() {
    const cartList = document.getElementById("cart-list");
    const totalItemsElem = document.getElementById("total-items");
    const totalPriceElem = document.getElementById("total-price");

    cartList.innerHTML = ""; // Bersihkan daftar sebelumnya
    let totalItems = 0;
    let totalPrice = 0;

    for (const snackName in cart) {
        const item = cart[snackName];
        const itemTotal = item.quantity * item.price;

        totalItems += item.quantity;
        totalPrice += itemTotal;

        // Buat elemen item keranjang
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <div>
                <strong>${item.quantity} x ${snackName}</strong>
                <p>@Rp${item.price.toLocaleString()}</p>
                <p>Total: Rp${itemTotal.toLocaleString()}</p>
            </div>
            <div class="cart-item-buttons">
                <button onclick="addToCart(${item.price}, '${snackName}')">+</button>
                <button onclick="removeFromCart('${snackName}')">-</button>
                <button onclick="deleteFromCart('${snackName}')">🗑️</button>
            </div>
        `;
        cartList.appendChild(cartItem);
    }

    totalItemsElem.textContent = totalItems;
    totalPriceElem.textContent = totalPrice.toLocaleString();
}

// Fungsi untuk membeli semua item di keranjang
function buyItems() {
    if (Object.keys(cart).length === 0) {
        alert("Keranjang Anda kosong!");
        return;
    }
    alert("Pesanan Anda telah berhasil dibeli!");
    clearCart();
}

// Fungsi untuk menghapus semua item di keranjang
function clearCart() {
    for (const key in cart) {
        delete cart[key];
    }
    updateCart();
}

// Hitung total harga berdasarkan item di keranjang
let cartItems = [
    { name: "Snack 1", price: 20000, quantity: 1 },
    { name: "Snack 2", price: 30000, quantity: 1 }
];