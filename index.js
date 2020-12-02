const text = [
    `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`,
    `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`,
    `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`
]

const img = [
    'https://raw.githubusercontent.com/victor-codes/room-homepage/main/images/desktop-image-hero-1.jpg',
    'https://raw.githubusercontent.com/victor-codes/room-homepage/main/images/desktop-image-hero-2.jpg',
    'https://raw.githubusercontent.com/victor-codes/room-homepage/main/images/desktop-image-hero-3.jpg'
]
const h2 = ['Discover innovative ways to decorate', ' We are available all across the globe', 'Manufactured with the best materials']

const hamburger = document.getElementById('hamburger');
const closeNavbar = document.getElementById('close');
const navbar = document.querySelector('.hidden__navbar');

let heroImage = document.getElementById('hero__image').src;
let image = document.getElementById('test');
let heroText = document.getElementById('hero__text');
let heroHeader = document.getElementById('hero__header');

const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');

let currentIndex = img.indexOf(heroImage);
let length = img.length - 1;

function openNavbar() {
    hamburger.style.display = 'none';
    document.querySelector('h1').style.display = 'none';
    document.querySelector('nav').style.backgroundColor = '#ffffff';
    navbar.style.display = 'block';
};

function hideNavbar() {
    navbar.style.display = 'none';
    hamburger.style.display = 'block';
    document.querySelector('h1').style.display = 'block';
    document.querySelector('nav').style.backgroundColor = 'transparent';
};

function sliderIn() {
    if (currentIndex < length) {
        currentIndex += 1;
        if (currentIndex <= 2) {
            document.getElementById('hero__image').src = img[currentIndex]
            heroHeader.innerHTML = h2[currentIndex];
            heroText.innerHTML = text[currentIndex];

            ([heroText, heroHeader]).forEach(element => {
                element.animate([
                    { transform: `translateX(20px)`, opacity: `0` },
                    { transform: `translateX(0px)`, opacity: `1` }
                ], {
                    duration: 400,
                    easing: `ease-out`
                })
            });
        }
    }
};

function sliderDe() {
    if (currentIndex > 0) {
        currentIndex -= 1;
        if (currentIndex >= 0) {
            document.getElementById('hero__image').src = img[currentIndex];
            heroHeader.innerHTML = h2[currentIndex];
            heroText.innerHTML = text[currentIndex];

            ([heroText, heroHeader]).forEach(element => {
                element.animate([
                    { transform: `translateX(-20px)`, opacity: `0` },
                    { transform: `translateX(0px)`, opacity: `1` }
                ], {
                    duration: 400,
                    easing: `ease-out`
                })
            });
        }
    }
};

nextButton.addEventListener('click', sliderIn);
previousButton.addEventListener('click', sliderDe);
hamburger.addEventListener('click', openNavbar);
closeNavbar.addEventListener('click', hideNavbar);
