const panels = document.querySelectorAll('.panel')
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')

    })
}

const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})