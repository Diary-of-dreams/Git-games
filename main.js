'use strict'

function onBallClick(elBall, maxDiameter) {
    elBall.style.backgroundColor = getRandomColor()
    elBall.offsetWidth
    console.log(elBall.offsetWidth)


    const randomSize = elBall.offsetWidth + getRandomInt(20, 60) +'px'
    elBall.style.width = randomSize
    elBall.style.height = randomSize 
    elBall.innerHTML = randomSize
    if (elBall.offsetWidth > maxDiameter) {
        elBall.style.width = 100 + 'px'
        elBall.style.height = 100 + 'px'
        elBall.innerHTML = elBall.style.width

    }
    console.log(elBall.offsetWidth)
}