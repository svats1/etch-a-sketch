// window.addEventListener('load', () => {
    
//     let boxCount = 0
    
//     const container = document.querySelector('.gridcontainer')

//     const input = document.querySelector('#input')
//     input.addEventListener('submit', e => {
//         e.preventDefault()

//         while (boxCount < parseInt(e.target[0].value)) {
            
//             const box = document.createElement('div')
//             box.className = "box"
//             box.style.backgroundColor = "red"
//             box.style.border = "0.25px white solid"
                    
//             container.appendChild(box)
        
//             boxCount++
//         }
//     })
// })

const input = document.querySelector('#input')
input.addEventListener('submit', e => {
    e.preventDefault()

    const container = document.querySelector('.gridcontainer')
    container.innerHTML = ''

    let boxCount = 0
    while (boxCount < parseInt(e.target[0].value)) {

        const box = document.createElement('div')
  
        box.className = "box"
        box.style.backgroundColor = "red"
        box.style.border = "0.25px white solid"
                
        container.appendChild(box)
    
        boxCount++
    }

    // Reset to re-enter While loop on next Submit
    boxCount = 0
})