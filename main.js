'use strict'

function onBallClick(elBall, maxDiameter) {
    elBall.style.backgroundColor = getRandomColor()
    console.log(elBall.offsetWidth)


    const randomSize = elBall.offsetWidth + getRandomInt(20, 60) +'px'
    elBall.style.width = randomSize
    elBall.innerHTML = randomSize
    if (elBall.offsetWidth > maxDiameter) {
        elBall.style.width = 100 + 'px'
        elBall.innerHTML = elBall.style.width

    }
    console.log(elBall.offsetWidth)
}

function onBallClickThird(elClick) {
const firstBall = document.querySelector('.ball')
const secondBall = document.querySelector('.ball2')

firstBall.style.backgroundColor = 'yellow'
firstBall.style.width = '250px'
firstBall.innerHTML = '250'
secondBall.style.backgroundColor = 'red'
secondBall.style.width = '144px'
secondBall.innerHTML = '144'
}


function onBallClickForth(elClick){
let firstBall = document.querySelector('.ball')
let secondBall = document.querySelector('.ball2')

let newSize = firstBall.offsetWidth - getRandomInt(20, 60)
if (newSize < 100) {
    firstBall.style.width = 100 + 'px'
    firstBall.innerHTML = 100
}
else{
let randomSizeBall1 = newSize +'px'
firstBall.style.width = randomSizeBall1
firstBall.innerHTML = firstBall.style.width}

let newSize2 = secondBall.offsetWidth - getRandomInt(20, 60)
if (newSize2 < 100) {
    secondBall.style.width = 100 +'px'
    secondBall.innerHTML = 100

}
else{
let randomSizeBall2 = newSize2 +'px'
secondBall.style.width = randomSizeBall2
secondBall.innerHTML = secondBall.style.width}

}