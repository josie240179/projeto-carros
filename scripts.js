let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .itens')
let indicator = document.querySelector('.indicatores')
let dots = document.querySelectorAll('.ind li')
let list = container.querySelector('.list')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

function setSlider() {
    let itemOld = document.querySelector('.container .list .itens.active')
    itemOld.classList.remove('active')
    items[active].classList.add('active')

    let dotsOld = document.querySelector('.container .indicadores .ind li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

document.querySelector('.container .indicadores .number').innerHTML = '0' + (active + 1)

}

nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
   

    
}   

prevButton.onclick = () => {
    list.style.setProperty('--calculation', - 1)
    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
    items[active].classList.add('active')
}   



