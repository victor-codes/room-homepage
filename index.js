const text = {
    h2: ['Discover innovative ways to decorate', ' We are available all across the globe', 'Manufactured with the best materials'],
    p: [
        `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`,
        `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`,
        `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`
    ]
}
// const img = [
//     `images\desktop-image-hero-1.jpg`, `images\desktop-image-hero-2.jpg` , "images\desktop-image-hero-1.jpg"
// ]
// console.log(img);
const hamburger = document.getElementById('hamburger')
const closeNavbar = document.getElementById('close')
const navbar = document.querySelector('.hidden__navbar')

const heroImage = document.getElementById('hero__image')
const heroText = document.getElementById('hero__text')
const heroHeader = document.getElementById('hero__header')

const nextButton = document.getElementById('next')
const previousButton = document.getElementById('previous')

let currentIndexH2 = text.h2.indexOf(heroHeader)
let currentIndexP = text.p.indexOf(heroHeader)
// let currentIndexImg = text.img.indexOf(heroHeader)

function openNavbar() {
    hamburger.style.display = 'none'
    document.querySelector('h1').style.display = 'none'
    document.querySelector('nav').style.backgroundColor = '#ffffff'
    navbar.style.display = 'block'
}
function hideNavbar() {
    navbar.style.display = 'none'
    hamburger.style.display = 'block'
    document.querySelector('h1').style.display = 'block'
    document.querySelector('nav').style.backgroundColor = 'transparent'
}

function slider() {
     
}
hamburger.addEventListener('click', openNavbar)
closeNavbar.addEventListener('click', hideNavbar)
