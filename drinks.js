//header for mob ver
// menu open close
let menu = document.querySelector('.menu-icon' );
let navbar = document.querySelector('.nav-bar' );

menu.onclick = () => {
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu");
}
//close menu on scroll
window.onscroll= () => {
    menu.classList.remove("move");
    navbar.classList.remove("open-menu");
}


// Menu 
// Menu Filtering

function filterMenu(category) {
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

const itemsInCart = [];

function addToBag(itemName, price) {
    itemsInCart.push({ name: itemName, price: price });
    updateBagDisplay();
}

function updateBagDisplay() {
    const bagItemsContainer = document.getElementById('bag-items');
    bagItemsContainer.innerHTML = '';

    itemsInCart.forEach((item) => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - ${item.price} ₸`;
        bagItemsContainer.appendChild(itemElement);
    });
}

function redirectToCart() {
    let queryParams = '?';

    for (let i = 0; i < itemsInCart.length; i++) {
        queryParams += `item${i + 1}=${encodeURIComponent(itemsInCart[i].name)}&`;
        queryParams += `price${i + 1}=${encodeURIComponent(itemsInCart[i].price)}&`;
    }

    queryParams = queryParams.slice(0, -1);

    window.location.href = 'cart.html' + queryParams;
}

document.addEventListener('DOMContentLoaded', () => {
    updateBagDisplay();
});
