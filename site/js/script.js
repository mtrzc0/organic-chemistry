const mobileMenuBtn = document.querySelector('.menu-btn')
const burgerBars = document.querySelector('.menu-btn .burger')
const headerMobileList = document.querySelector('header .mobile-list')
const headerMobileListLink = document.querySelectorAll('header .mobile-list li')

let screenWidth = 0

function showMobileMenu() {
    screenWidth = screen.width
    if (screenWidth < 650){
        if (headerMobileList.style.top == '-300px') {
            headerMobileList.style.top = '60px'
            headerMobileListLink.forEach(link => {
                link.style.transform = 'scale(1)'
            })
            burgerBars.classList.toggle('changeBars')
        }
        else {
            headerMobileList.style.top = '-300px'
            headerMobileListLink.forEach(link => {
                link.style.transform = 'scale(0)'
            })
            burgerBars.classList.toggle('changeBars')
        }
    } else if (screenWidth > 650 && screenWidth < 1150) {
        if (headerMobileList.style.top == '-300px') {
            headerMobileList.style.top = '80px'
            headerMobileListLink.forEach(link => {
                link.style.transform = 'scale(1)'
            })
            burgerBars.classList.toggle('changeBars')
        }
        else {
            headerMobileList.style.top = '-300px'
            headerMobileListLink.forEach(link => {
                link.style.transform = 'scale(0)'
            })
            burgerBars.classList.toggle('changeBars')
        }
    }
}

mobileMenuBtn.addEventListener('click', showMobileMenu)