window.addEventListener('load', () => {
    
    let boxCount = 0
    
    const container = document.querySelector('.gridcontainer')

    const input = document.querySelector('#input')
    input.addEventListener('submit', e => {
        e.preventDefault()
        
        let gridSize = parseInt(e.target[0].value)

        while (boxCount < gridSize) {
            
            const box = document.createElement('div')
            box.className = "box"
            box.style.backgroundColor = "red"
            box.style.border = "0.25px white solid"
                    
            container.appendChild(box)
        
            boxCount++
        }
    })
})