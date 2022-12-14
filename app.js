const board = document.querySelector('#board')
const colors = ['#FF00FF', '#00FF00', '#000080', '#00FFFF', '#ff1493', '#f8f8ff', '#ffa07a']
const SQUARES_NUMBER = 600

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () =>
        setColor(square))
    square.addEventListener('mouseleave', () =>
        removeColor(square))
    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
