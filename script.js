// window.addEventListener('load', () => {

//     const input = document.querySelector('#input')
//     input.addEventListener('input', e => {
//         e.preventDefault()
//         const gridSize = parseInt(e.target.value)

//         const container = document.querySelector('.gridcontainer')
//         container.innerHTML = ''

//         let boxCount = 0
//         while (boxCount < Math.pow(gridSize,2)) {

//             const box = document.createElement('div')    
//             box.className = "box"
//             box.style.backgroundColor = "white"
//             box.style.borderRadius = "3px"
//             box.style.minWidth = `calc(600px/${gridSize})`
                    
//             container.appendChild(box)

//             boxCount++
//         }

//         // Reset to re-enter While loop on next Submit
//         boxCount = 0
//     })

// })


const gridSize = 16
const container = document.querySelector('.gridcontainer')
const colorPicker = document.querySelector('#colorpicker')

let boxCount = 0
while (boxCount < Math.pow(gridSize, 2)) {

    const box = document.createElement('div')    
    box.className = "box"
    box.style.backgroundColor = "white"
    box.style.borderRadius = "3px"
    box.style.minWidth = `calc(600px/${gridSize})`
            
    container.appendChild(box)

    boxCount++

    box.addEventListener('mouseenter', () => {
        box.style.backgroundColor = colorPicker.value
    })
}

// Reset to re-enter While loop on next Submit
boxCount = 0


