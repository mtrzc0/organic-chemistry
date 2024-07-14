// footer year
let date = new Date()
const dateElement = document.querySelector('#date')
dateElement.innerText = date.getFullYear()

// hamburger animation
const mobileMenu = document.querySelector('header .mobile-list');
const mobileMenuLink = document.querySelectorAll('.mobile-list ul li a');

const toggle = document.querySelector('.menu-btn .burger')
const menuTL = gsap.timeline({ defaults: { duration: .8 } });
let isOpen = false

const screenObject = {
    smartphoneWidth: 650,
    tabletWidth: 1150
}

function smartphoneWidth () {
    if (isOpen === false) {
        toggle.classList.add('changeBars')
        menuTL
            .to(mobileMenu, { translateX: '0vw'  })
        isOpen = true
    } else {
        toggle.classList.remove('changeBars')
        menuTL
            .to(mobileMenu, { translateX: '-85vw' })
        isOpen = false
    }
}

function tabletWidth() {
    if (isOpen === false) {
        toggle.classList.add('changeBars')
        menuTL
            .to(mobileMenu, { translateX: '0vw' })
        isOpen = true
    } else {
        toggle.classList.remove('changeBars')
        menuTL
            .to(mobileMenu, { translateX: '-85vw' })
        isOpen = false
    }
}

toggle.addEventListener('click', () => {
    if (screen.width < screenObject.smartphoneWidth) {
        smartphoneWidth()
    } else if (screen.width > screenObject.smartphoneWidth && screen.width < screenObject.tabletWidth) {
        tabletWidth()
    }

})