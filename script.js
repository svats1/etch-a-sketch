const container = document.querySelector('.gridcontainer')

const box = document.createElement('div')
box.className = "box"
box.style.backgroundColor = "red"
// box.style.width = "40vw"
box.style.height = "50px"

container.appendChild(box)

const box2 = document.createElement('div')
box2.className = "box"
box2.style.backgroundColor = "blue"
// box2.style.width = "40vw"
box2.style.height = "50px"

container.appendChild(box2)

const box3 = document.createElement('div')
box3.className = "box"
box3.style.backgroundColor = "green"
// box3.style.width = "40vw"
box3.style.height = "50px"

container.appendChild(box3)

const box4 = document.createElement('div')
box4.className = "box"
box4.style.backgroundColor = "yellow"
// box3.style.width = "40vw"
box4.style.height = "50px"

container.appendChild(box4)