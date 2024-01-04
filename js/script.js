const toggleButton = document.querySelector(".toggleButton")
const navbarLinks = document.querySelector(".linkek")

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle("active")
})