'use strict'

function onBallClick(elBall, maxDiameter) {
    elBall.style.backgroundColor = getRandomColor()
    elBall.offsetWidth
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