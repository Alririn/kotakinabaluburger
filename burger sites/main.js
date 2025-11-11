console.log('alririn')
alert("This site is for educational/study purposes only. It is NOT a commercial product and some content may be simulated or fake. Do NOT provide personal or sensitive information.");


// --- Add To Cart Functionality ---
const addButtons = document.querySelectorAll('.product-card button');

addButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const card = e.target.parentElement;
    const product = {
      title: card.querySelector('h3').innerText,
      price: card.querySelector('span').innerText,
      img: card.querySelector('img').src
    };

    let cart = JSON.parse(localStorage.getItem('kkBurgerCart')) || [];
    cart.push(product);
    localStorage.setItem('kkBurgerCart', JSON.stringify(cart));

    alert(`${product.title} added to cart!`);
  });
});

// --- Popup Functionality ---
const popup = document.getElementById('product-popup');
const popupImg = document.getElementById('popup-img');
const popupTitle = document.getElementById('popup-title');
const popupDesc = document.getElementById('popup-desc');
const popupPrice = document.getElementById('popup-price');
const closeBtn = document.querySelector('.close-btn');
const popupAddBtn = popup.querySelector('button');

// Show popup on product image click
document.querySelectorAll('.product-card img').forEach(img => {
  img.addEventListener('click', () => {
    const card = img.parentElement;
    popupImg.src = card.querySelector('img').src;
    popupTitle.innerText = card.querySelector('h3').innerText;
    popupDesc.innerText = card.querySelector('p').innerText;
    popupPrice.innerText = card.querySelector('span').innerText;
    popup.classList.remove('hidden');
  });
});

// Close popup
closeBtn.addEventListener('click', () => {
  popup.classList.add('hidden');
});

// Add to cart from popup
popupAddBtn.addEventListener('click', () => {
  const product = {
    title: popupTitle.innerText,
    price: popupPrice.innerText,
    img: popupImg.src
  };

  let cart = JSON.parse(localStorage.getItem('kkBurgerCart')) || [];
  cart.push(product);
  localStorage.setItem('kkBurgerCart', JSON.stringify(cart));

  alert(`${product.title} added to cart!`);
  popup.classList.add('hidden');
});
