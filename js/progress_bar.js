
//progress bar


const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle1');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }
    update()
})
function update() {
    circles.forEach((circle1, idx) => {
        if (idx < currentActive) {
            circle1.classList.add('active')
        }
        else {
            circle1.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    console.log("estoy aqui")

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}



