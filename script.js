const newgrid = document.querySelector('#newgrid')
const colorPicker = document.querySelector('#colorpicker')
const container = document.querySelector('.gridcontainer')
const randomize = document.querySelector('#randomize')
let color = colorPicker.value

// Default screen
let gridSize = 16
drawGrid(gridSize)

// On user input
newgrid.addEventListener('submit', (e) => {
    e.preventDefault()
    gridSize = parseInt(e.target[0].value)
    // Clear out previous grid
    container.innerHTML = ''
    drawGrid(gridSize)
})

function randomRGB() {
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    return `rgb(${r},${g},${b})`
}

function createBox() {
    const box = document.createElement('div')    
    box.className = "box"
    box.style.backgroundColor = "white"
    box.style.borderRadius = "3px"
    box.style.minWidth = `calc(600px/${gridSize})`
    box.addEventListener('mouseenter', () => {
        if (randomize.checked == true) {
            box.style.backgroundColor = randomRGB()
        } else {
            box.style.backgroundColor = colorPicker.value
        }
    })
    return box
}

function drawGrid(gridSize) {
    let boxCount = 0
    while (boxCount < Math.pow(gridSize,2)) {
        const box = createBox()
        container.appendChild(box)
        boxCount++;
    }
}