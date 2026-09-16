'use strict'

function onBallClick(elBall) {
    elBall.offsetWidth

    elBall.style.width = elBall.offsetWidth + 50 + 'px'
    elBall.style.height = elBall.offsetWidth + 50 + 'px'
    elBall.innerHTML = elBall.style.width
}