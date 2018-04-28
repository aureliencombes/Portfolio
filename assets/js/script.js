const menu = document.querySelector('.menu')

const bioButton = document.querySelector('.bioButton')
const worksButton = document.querySelector('.worksButton')

const closeButton = document.querySelector('.close')

const bar = document.querySelector('.bar')

const cache1 = document.querySelector('.cache1')
const cache2 = document.querySelector('.cache2')

const bioText = document.querySelector('.bioText')
const worksGallery = document.querySelector('.gallery')

const projectSelected = []
const blackScreen = document.querySelector('.blackScreen')
const projectImage = document.querySelector('.previewImage')
const projectTitle = document.querySelector('.previewTitle')
const projectText = document.querySelector('.previewText')
const projectLink = document.querySelector('.previewLink')


const works = worksButton.addEventListener('click', () => {

    menu.classList.add('active')
    bar.classList.add('active')

    cache1.classList.add('active')
    cache2.style.display = 'none'

    bioText.classList.remove('active')
    worksGallery.classList.add('active')

    worksButton.style.color = 'black'
    bioButton.style.color = 'rgb(228, 228, 228)'

})

const bio = bioButton.addEventListener('click', () => 
{
    menu.classList.add('active')
    bar.classList.add('active')

    cache1.classList.add('active')
    cache2.style.display = 'none'

    worksGallery.classList.remove('active')
    bioText.classList.add('active')

    worksButton.style.color = 'rgb(228, 228, 228)'
    bioButton.style.color = 'black'

})

const close = closeButton.addEventListener('click', () => 
{
    blackScreen.style.display = 'none'
})

const projectSelection = () => 
{

    for(let i = 1; i < 10; i++)
    {
        projectSelected[i] = document.querySelector(`.index-${i}`)
        projectSelected[i].addEventListener('click', () => 
        {
            console.log(i)
            blackScreen.style.display = 'inherit'

            projectImage.style.backgroundImage = project[i].image
            projectTitle.innerHTML = project[i].title
            projectText.innerHTML = project[i].text
            projectLink.innerHTML = project[i].linkText
            projectLink.href = project[i].link
        })
    }
}

projectSelection()

