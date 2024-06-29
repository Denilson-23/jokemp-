
const stone = document.querySelector('#stone').value
const paper = document.querySelector('#paper').value
const scissors = document.querySelector('#scissors').value
const result = document.querySelector('.result')
const voce = document.querySelector('.voce')
const maquina = document.querySelector('.maquina')
const color = document.querySelector('.resultcolor')
let machine = 0
let you = 0

const valuemachine = () => {
    const valueromodn = [paper, stone, scissors]
    const resiltmachine = Math.floor(Math.random() * 3)
    return valueromodn[resiltmachine]
}

function onstone() {

    if (valuemachine() == paper) {
        machine++
        maquina.innerHTML = machine
        result.innerHTML = 'Você Perdeu'
        result.style.color = "red"
    } else if (valuemachine() == scissors) {
        you++
        voce.innerHTML = you
        result.innerHTML = 'Você Venceu'
        result.style.color = "blue"
    } else {
        result.innerHTML = 'Empatou'
        result.style.color = "green"
    }
}

function onpaper() {

    if (valuemachine() == scissors) {
        machine++
        maquina.innerHTML = machine
        result.innerHTML = 'Você Perdeu'
        result.style.color = "red"
    } else if (valuemachine() == stone) {
        you++
        voce.innerHTML = you
        result.innerHTML = 'Você Venceu'
        result.style.color = "blue"
    } else {
        result.innerHTML = 'Empatou'
        result.style.color = "green"
    }
}

function onscissors() {

    if (valuemachine() == stone) {
        machine++
        maquina.innerHTML = machine
        result.innerHTML = 'Você Perdeu'
        result.style.color = "red"
    } else if (valuemachine() == paper) {
        you++
        voce.innerHTML = you
        result.innerHTML = 'Você Venceu'
        result.style.color = "blue"
    } else {
        result.innerHTML = 'Empatou'
        result.style.color = "green"
    }
}

