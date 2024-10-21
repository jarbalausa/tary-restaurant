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


// masterclasses
function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.accordion-icon');
    
    if (content.style.display === "block") {
        content.style.display = "none";
        icon.textContent = "+";
    } else {
        content.style.display = "block";
        icon.textContent = "-";
    }
}
toggleAccordion(header);
// booking
function updatePersonsValue(value) {
    document.getElementById('personsValue').textContent = value;
}

function validateForm(event) {
    event.preventDefault();
    let isValid = true;

    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const date = document.getElementById('date');
    const eventFormat = document.getElementById('eventFormat');

    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const dateError = document.getElementById('dateError');
    const eventFormatError = document.getElementById('eventFormatError');

    if (name.value.trim() === "") {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    if (phone.value.trim() === "") {
        phoneError.style.display = 'block';
        isValid = false;
    } else {
        phoneError.style.display = 'none';
    }

    if (date.value === "") {
        dateError.style.display = 'block';
        isValid = false;
    } else {
        dateError.style.display = 'none';
    }

    if (eventFormat.value === "") {
        eventFormatError.style.display = 'block';
        isValid = false;
    } else {
        eventFormatError.style.display = 'none';
    }

    if (isValid) {
        alert("Өтінім сәтті жіберілді!");
        document.getElementById('bookingForm').reset();
        updatePersonsValue(130); 
    } else {
        alert("Барлық тізімдерді міндетті түрде толтырыңыз");
    }
}
//footer 
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('footer a');

    for (const link of links) {
        link.addEventListener('click', function (event) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                event.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});





// const navMenu = document.getElementById('nav-menu-id');
// const navCommute = document.getElementById('nav-commute-id');
// const navClose = document.getElementById('nav-close-id');

// navCommute.addEventListener('click', () => {
//     navMenu.classList.add('show-menu');
// });

// navClose.addEventListener('click', () => {
//     navMenu.classList.remove('show-menu');
// });

// // SEARCH INPUT
// const search = document.getElementById('search');
// const searchBtn = document.getElementById('search-btn-id');
// const searchClose = document.getElementById('search-close');

// // Search show
// searchBtn.addEventListener('click', () => {
//     search.classList.add('show-search');
// });

// // Search hidden
// searchClose.addEventListener('click', () => {
//     search.classList.remove('show-search');
// });
