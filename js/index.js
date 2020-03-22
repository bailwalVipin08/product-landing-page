function scrollFunction() {
  const header = document.getElementById('header')
  if (
    document.body.scrollTop === 0 ||
    document.documentElement.scrollTop === 0
  ) {
    header.classList.remove('header-scrolled')
  }
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    header.classList.toggle('header-scrolled')
  }
}

window.onscroll = function() {
  scrollFunction()
}

const backdrop = document.querySelector('.backdrop')
const toggleBtn = document.querySelector('.toggle-btn')
const mobileMenu = document.querySelector('.mobile-nav')
const mobileMenuLink = document.querySelectorAll('.mobile-nav__item--link')

backdrop.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-nav-open')
  backdrop.style.display = 'none'
})

toggleBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-nav-open')
  backdrop.style.display = 'block'
})

mobileMenuLink.forEach(link => {
  link.addEventListener('click', () => {
    backdrop.style.display = 'none'
    mobileMenu.classList.toggle('mobile-nav-open')
  })
})
