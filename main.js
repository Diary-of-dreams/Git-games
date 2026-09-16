'use strict'

function onBallClick(elBall) {
    elBall.offsetWidth
    console.log(elBall.offsetWidth)


    elBall.style.width = elBall.offsetWidth + 50 + 'px'
    elBall.style.height = elBall.offsetWidth + 50 + 'px'
    elBall.innerHTML = elBall.style.width

    if (elBall.offsetWidth >400) {
        elBall.style.width = 100 + 'px'
        elBall.style.height = 100 + 'px'
        elBall.innerHTML = elBall.style.width

    }
    console.log(elBall.offsetWidth)
}