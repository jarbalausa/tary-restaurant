// 

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToBag(name, price) {
    const item = cart.find(i => i.name === name);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateBag();
}

function removeFromBag(name) {
    cart = cart.filter(item => item.name !== name);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateBag();
}

function updateBag() {
    const bagItemsContainer = document.getElementById('bag-items');
    if (bagItemsContainer) {
        bagItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const bagItem = document.createElement('div');
            bagItem.className = 'bag-item';
            bagItem.innerHTML = `
                <span>${item.name} x${item.quantity}</span>
                <span>${item.price * item.quantity} ₸</span>
                <button onclick="removeFromBag('${item.name}')">Жою</button>
            `;
            bagItemsContainer.appendChild(bagItem);
            total += item.price * item.quantity;
        });

        const bagTotal = document.getElementById('bag-total');
        if (bagTotal) {
            bagTotal.innerText = `Құны: ${total} ₸`;
        }
    }
}

function checkout(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const paymentMethod = document.getElementById('payment-method').value;

    console.log({
        name,
        address,
        phone,
        paymentMethod,
        cart
    });

    alert('Тапсырыс қабылданды!');
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateBag();
}

document.addEventListener('DOMContentLoaded', () => {
    updateBag();
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', checkout);
    }
});


window.onload = function() {
    var params = new URLSearchParams(window.location.search);

    
    params.forEach(function(value, key) {
        if (key.startsWith('item')) {
            var itemName = decodeURIComponent(value);
            var priceKey = `price${key.substring(4)}`;
            var price = decodeURIComponent(params.get(priceKey));
            
          
            var cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${itemName} - ${price} ₸</p>
            `;
            document.getElementById('cart').appendChild(cartItem);
        }
    });
}
