import {
    createImage
} from './composants/image.js'

const contentContainer = document.getElementById('content')
const filterAll = document.getElementById('filter-all')
const filterM = document.getElementById('filter-monuments')
const filterB = document.getElementById('filter-bridges')
const filterS = document.getElementById('filter-statues')

window.fetch(`http://localhost:5555/gallery/`)
    .then(res => res.json())
    .then(image => {
        contentContainer.innerHTML = image.map(createImage).join('')
    })

filterAll.addEventListener('click', () => {
    window.fetch(`http://localhost:5555/gallery/`)
        .then(res => res.json())
        .then(image => {
            contentContainer.innerHTML = image.map(createImage).join('')
        })
})

filterM.addEventListener('click', () => {
    window.fetch(`http://localhost:5555/monuments/`)
        .then(res => res.json())
        .then(image => {
            contentContainer.innerHTML = image.map(createImage).join('')
        })
})

filterB.addEventListener('click', () => {
    window.fetch(`http://localhost:5555/bridges/`)
        .then(res => res.json())
        .then(image => {
            contentContainer.innerHTML = image.map(createImage).join('')
        })
})

filterS.addEventListener('click', () => {
    window.fetch(`http://localhost:5555/statues/`)
        .then(res => res.json())
        .then(image => {
            contentContainer.innerHTML = image.map(createImage).join('')
        })
})
