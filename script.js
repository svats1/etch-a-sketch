const container = document.querySelector('.gridcontainer')

let boxCount = 0
let gridSize = 16

while (boxCount < gridSize) {
    const box = document.createElement('div')
    box.className = "box"
    box.style.backgroundColor = "red"
    box.style.border = "0.25px white solid"
    // box.style.minWidth = "calc(29.5*10px)"
    box.style.minWidth = `calc(600px/${Math.sqrt(gridSize)}*0.95)`
    
    // box.style.height = box.style.minWidth

    container.appendChild(box)

    boxCount++
}
