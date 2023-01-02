const input = document.querySelector('#input')
const colorPicker = document.querySelector('#colorpicker')
const container = document.querySelector('.gridcontainer')

function drawGrid(gridSize) {
    let boxCount = 0
    while (boxCount < Math.pow(gridSize,2)) {
        const box = document.createElement('div')    
        box.className = "box"
        box.style.backgroundColor = "white"
        box.style.borderRadius = "3px"
        box.style.minWidth = `calc(600px/${gridSize})`
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = colorPicker.value
        })
        container.appendChild(box)
        boxCount++
    }
}

// Default screen
let gridSize = 16
drawGrid(gridSize)

// On user input
input.addEventListener('submit', e => {
    e.preventDefault()
    gridSize = parseInt(e.target[0].value)
    // Clear out previous grid
    container.innerHTML = ''
    drawGrid(gridSize)
})
