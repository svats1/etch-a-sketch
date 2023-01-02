const input = document.querySelector('#input')
const colorPicker = document.querySelector('#colorpicker')
const container = document.querySelector('.gridcontainer')
const randRGB = document.querySelector('#randRGB')
let color = ""

// Default screen
let gridSize = 16
drawGrid(gridSize, color)

// On user input
input.addEventListener('submit', (e) => {
    e.preventDefault()
    color = ""
    gridSize = parseInt(e.target[0].value)
    // Clear out previous grid
    container.innerHTML = ''
    drawGrid(gridSize, color)
})

// On random button
randRGB.addEventListener('click', (e) => {
    e.preventDefault()
    color = "random"
    // Clear out previous grid
    container.innerHTML = ''
    drawGrid(gridSize, color)
})


function drawGrid(gridSize, color) {
    let boxCount = 0
    while (boxCount < Math.pow(gridSize,2)) {
        const box = document.createElement('div')    
        box.className = "box"
        box.style.backgroundColor = "white"
        box.style.borderRadius = "3px"
        box.style.minWidth = `calc(600px/${gridSize})`
        if (color == "random") {
            box.addEventListener('mouseenter', () => {
                box.style.backgroundColor = "blue"
            })
        }
        else {
            box.addEventListener('mouseenter', () => {
                box.style.backgroundColor = colorPicker.value
            })
        }       
        container.appendChild(box)
        boxCount++
    }
}

