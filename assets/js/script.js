const menu = document.querySelector('.menu')
const bioButton = document.querySelector('.bioButton')
const worksButton = document.querySelector('.worksButton')
const bar = document.querySelector('.bar')
const cache1 = document.querySelector('.cache1')
const cache2 = document.querySelector('.cache2')
const bioText = document.querySelector('.bioText')
const worksGallery = document.querySelector('.gallery')


const works = worksButton.addEventListener('click', () => {

    menu.classList.add('active')
    bar.classList.add('active')

    cache1.classList.add('active')
    cache2.style.display = "none"

    bioText.classList.remove('active')
    worksGallery.classList.add('active')

    worksButton.style.color = 'black'
    bioButton.style.color = 'rgb(228, 228, 228)'

})

const bio = bioButton.addEventListener('click', () => {

    menu.classList.add('active')
    bar.classList.add('active')

    cache1.classList.add('active')
    cache2.style.display = "none"

    worksGallery.classList.remove('active')
    bioText.classList.add('active')

    worksButton.style.color = 'rgb(228, 228, 228)'
    bioButton.style.color = 'black'
})